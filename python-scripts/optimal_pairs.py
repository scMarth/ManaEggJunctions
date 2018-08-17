'''

This solution fails because of infinite loops.

Needs junction pair cycle detection

'''

import sys
import egg_data
import optimal_pairs_data

# global variables
optimal_pairs_vars = optimal_pairs_data.OptimalPairsData()

# classes
class EggNode(object):

    # constructor
    def __init__(self, name):
        # initialize the egg node
        self.name = name
        self.min_cost = -1
        self.parent_junction = None
        self.child_junctions = []
        self.explored = False
        self.unexplored_junction_list = []
        self.junction_path = {}

class Junction():

    # constructor
    def __init__(self):
        # initialize the junction
        self.min_cost = -1
        self.parent_egg_node = None
        self.left_child_egg = None
        self.right_child_egg = None
        self.junction_id = None # invariant: thus must be the respective index in egg_data junctionPairs array
        self.explored = False

'''

Given an egg and its minimum cost, find the junction pairs s.t. the sum of their costs is equal to the
minimum cost. For those minimum cost junction pairs, add their index to optimal_pairs_vars.optimal_pairs

'''
def set_optimal_pairs_array(egg_name, min_cost):
    global optimal_pairs_vars

    for i in range(0,len(egg_data.egg_data[egg_name]['junctionPairs'])):
        pair = egg_data.egg_data[egg_name]['junctionPairs'][i]
        left_egg = pair[0]
        right_egg = pair[1]

        left_egg_cost = optimal_pairs_vars.min_eggs_to_make['left_egg']
        right_egg_cost = optimal_pairs_vars.min_eggs_to_make['right_egg']

        # if the cost of this pair is equal to the minumum cost, then it is an optimal pair
        # so, we add it to the optimal_pairs array
        if (left_egg_cost + right_egg_cost == min_cost):
            optimal_pairs_vars.optimal_pairs[egg_name].append(i)
            # print("optimal pair: " + str(i))


def was_visited(egg_name):
    global optimal_pairs_vars
    return optimal_pairs_vars.visited_eggs[egg_name]

def explore_egg(egg_name):
    root_egg = EggNode(egg_name)
    explore_egg_node(root_egg)

def explore_egg_node(root_egg):
    if (root_egg.name == ''):
        sys.stderr.write('Error: explore_egg_node called on un-named egg.')
        sys.exit()

    if was_visited(root_egg.name):
        return

    # if there was a cycle, return and set the cost to infinite
    if root_egg.name in root_egg.junction_path:
        root_egg.min_cost = -1
        root_egg.explored = True
        return

    junctions = egg_data.egg_data[root_egg.name]['junctionPairs']

    # for all root_egg's junction pairs
    for i in range(0, len(junctions)):
        j = Junction()
        j.junction_id = i

        add_child_junction_to_egg_node(j, root_egg)

        left_egg = EggNode(junctions[i][0])
        right_egg = EggNode(junctions[i][1])

        add_left_egg_to_junction(left_egg, j)
        add_right_egg_to_junction(right_egg, j)

        fetch_junction_path(left_egg)
        fetch_junction_path(right_egg)

        if was_visited(left_egg.name):
            left_egg.min_cost = min_cost(left_egg.name)
            left_egg.explored = True

        if was_visited(right_egg.name):
            right_egg.min_cost = min_cost(right_egg.name)
            right_egg.explored = True

        if was_visited(left_egg.name) and was_visited(right_egg.name):
            j.min_cost = left_egg.min_cost + right_egg.min_cost
            if root_egg.min_cost > j.min_cost or root_egg.min_cost == -1:
                root_egg.min_cost = j.min_cost
            j.explored = True
        else:
            root_egg.unexplored_junction_list.append(j)

    # while the root egg has unexplored junctions
    while len(root_egg.unexplored_junction_list) > 0:
        j = root_egg.unexplored_junction_list.pop(0) # remove first element

        if j.left_child_egg.explored == True and j.right_child_egg.explored == False:
            if is_level_one_egg(j.right_child_egg.name):
                sys.stderr.write('Error: Lv.1 Right Egg, both explored.')
            else:
                tsum = 2 + j.left_child_egg.min_cost
                if tsum > root_egg.min_cost:
                    j.right_child_egg.explored = True
                    j.explored = True
                    j.min_cost = tsum
                    continue

        if j.left_child_egg.explored == False and j.right_child_egg.explored == True:
            if is_level_one_egg(j.left_child_egg.name):
                sys.stderr.write('Error: Lv.1 Left Egg, both explored.')
            else:
                tsum = 2 + j.right_child_egg.min_cost
                if tsum > root_egg.min_cost:
                    j.left_child_egg.explored = True
                    j.explored = True
                    j.min_cost = tsum
                    continue

        if j.left_child_egg.explored == False:
            explore_egg_node(j.left_child_egg) # RECUR LEFT

        if j.left_child_egg.explored == True and j.left_child_egg.min_cost == -1:
            j.right_child_egg.explored = True # should this be left?
            j.right_child_egg.min_cost = -1

        if j.right_child_egg.explored == False:
            explore_egg_node(j.right_child_egg) # RECUR RIGHT

        if j.left_child_egg.explored == True and j.left_child_egg.min_cost == -1:
            j.min_cost = -1
            j.explored = True
            continue
        elif j.right_child_egg.explored == True and j.right_child_egg.min_cost == -1:
            j.min_cost = -1
            j.explored = True
            continue
        else:
            j.min_cost = j.left_child_egg.min_cost + j.right_child_egg.min_cost
            if root_egg.min_cost > j.min_cost or root_egg.min_cost == -1:
                root_egg.min_cost = j.min_cost
            j.explored = True

    # set optimal_pairs
    for i in range(0,len(root_egg.child_junctions)):
        if (root_egg.child_junctions[i].min_cost == root_egg.min_cost):
            optimal_pairs_vars.optimal_pairs[root_egg.name].append(root_egg.child_junctions[i].junction_id)


    # set visited_eggs
    optimal_pairs_vars.visited_eggs[root_egg.name] = True

    # set min_eggs_to_make
    optimal_pairs_vars.min_eggs_to_make[root_egg.name] = root_egg.min_cost

def add_child_junction_to_egg_node(child_junction, target_egg_node):
    child_junction.parent_egg_node = target_egg_node
    target_egg_node.child_junctions.append(child_junction)

def add_parent_junction_to_egg_node(parent_junction, target_egg_node):
    target_egg_node.parent_junction = parent_junction

def add_left_egg_to_junction(left_egg_node, target_junction):
    left_egg_node.parent_junction = target_junction
    target_junction.left_child_egg = left_egg_node

def add_right_egg_to_junction(right_egg_node, target_junction):
    right_egg_node.parent_junction = target_junction
    target_junction.right_child_egg = right_egg_node

def min_cost(egg_name):
    global optimal_pairs_vars
    return optimal_pairs_vars.min_eggs_to_make[egg_name]

def is_level_one_egg(egg_name):
    if egg_name == 'Flare':
        return True
    elif egg_name == 'Wind':
        return True
    elif egg_name == 'Aqua':
        return True
    elif egg_name == 'Stone':
        return True
    else:
        return False

# add the parent egg and its junction path to the target egg node's path
def fetch_junction_path(target_egg_node):
    parent_egg_node = target_egg_node

    if parent_egg_node.parent_junction:
        parent_egg_node = parent_egg_node.parent_junction.parent_egg_node

    target_egg_node.junction_path[parent_egg_node.name] = 1

    for key in parent_egg_node.junction_path:
        target_egg_node.junction_path[key] = 1

def get_optimal_pairs():
    # for lvl in range(1, len(egg_data.egg_levels)):
    for lvl in range(1, 4):
        print ("LEVEL " + str(lvl))
        for i in range(0, len(egg_data.egg_levels[lvl])):
            name = egg_data.egg_levels[lvl][i]
            print(name)
            explore_egg(name)
            minimum_cost = optimal_pairs_vars.min_eggs_to_make[name]
            print(name + " : cost: " + str(minimum_cost))
            outStr = ""
            for pair_index in optimal_pairs_vars.optimal_pairs[name]:
                outStr = "\t["
                outStr += egg_data.egg_data[name]['junctionPairs'][pair_index][0]
                outStr += ", "
                outStr += egg_data.egg_data[name]['junctionPairs'][pair_index][1]
                outStr += "]\n"
            print(outStr)

get_optimal_pairs()
