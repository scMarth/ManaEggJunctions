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
minimum cost. For those minimum cost junction pairs, add their index to optimal_pair_vars.optimal_pairs

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

def min_eggs(egg_name):
    global optimal_pairs_vars

    if (optimal_pairs_vars.visited_eggs[egg_name] == True):
        print("min_eggs({0}) = {1}".format(egg_name, optimal_pairs_vars.min_eggs_to_make[egg_name]))
        return optimal_pairs_vars.min_eggs_to_make[egg_name]
    else:

        costs = []

        for i in range(0,len(egg_data.egg_data[egg_name]['junctionPairs'])):
            pair = egg_data.egg_data[egg_name]['junctionPairs'][i]
            left_egg = pair[0]
            right_egg = pair[1]

            print("\t" + left_egg)
            print("\t" + right_egg)

            left_egg_cost = -1
            right_egg_cost = -1

            # if an egg hasn't been visited yet, we know that we haven't computed its minimum cost,
            # thus, we must first compute their minimum cost before proceeding
            if (optimal_pairs_vars.visited_eggs[left_egg] == False):
                print("\trecurring...")
                left_egg_cost = min_eggs(left_egg)
            else:
                left_egg_cost = optimal_pairs_vars.min_eggs_to_make[left_egg]
            if (optimal_pairs_vars.visited_eggs[right_egg] == False):
                print("\trecurring...")
                right_egg_cost = min_eggs(right_egg)
            else:
                right_egg_cost = optimal_pairs_vars.min_eggs_to_make[right_egg]

            # we should now have the cost of both eggs
            if left_egg_cost == -1 or right_egg_cost == -1:
                sys.stderr.write('Unexplored egg in min_eggs')
                sys.exit()

            costs.append(left_egg_cost + right_egg_cost)

        if not costs:
            sys.stderr.write('No costs computed for egg:' + egg_name)
            sys.exit()

        print(costs)

        # the minimum cost is simply the lowest value in the cost array
        min_cost = min(costs)

        set_optimal_pairs_array(egg_name, min_cost)

        # set this egg to visited
        optimal_pairs_vars.visited_eggs[egg_name] = True

        # store the minimum cost of this egg, so that we won't have to recompute it
        optimal_pairs_vars.min_eggs_to_make[egg_name] = min_cost

        return min_cost

def get_optimal_pairs():
    # for lvl in range(1, len(egg_data.egg_levels)):
    for lvl in range(1, 3):
        print ("LEVEL " + str(lvl))
        for i in range(0, len(egg_data.egg_levels[lvl])):
            name = egg_data.egg_levels[lvl][i]
            print(name)
            print(name + " : cost: " + str(min_eggs(name)))
            outStr = ""
            for pair_index in optimal_pairs_vars.optimal_pairs[name]:
                outStr = "\t["
                outStr += egg_data.egg_data[name]['junctionPairs'][pair_index][0]
                outStr += ", "
                outStr += egg_data.egg_data[name]['junctionPairs'][pair_index][1]
                outStr += "]\n"
            print(outStr)

get_optimal_pairs()

