'''

Assumption: may need to be proven: If you have an egg and traverse its junctions in breadth-first order,
then the first immediate child junction of that egg to have its cost computed is the lowest cost junction.

Doing a brute-force until all immediate child junctions of the root egg node have its lowest cost found seems to work but takes forever.

'''

import sys
import egg_data
import optimal_pairs_data
from mana_eggs import EggNode, Junction

# global variables
optimal_pairs_vars = optimal_pairs_data.OptimalPairsData()

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

def mark_branch_as_visited(junction):
    junction.explored = True
    junction.left_child_egg.explored = True
    junction.right_child_egg.explored = True

    # parent_egg = junction.parent_egg_node
    # parent_egg.

def update_parent_costs(junction):
    curr_junction = junction
    
    while True:
        parent_egg_of_curr_junction = curr_junction.parent_egg_node
        if not parent_egg_of_curr_junction:
            break

        if parent_egg_of_curr_junction.min_cost == -1 or parent_egg_of_curr_junction.min_cost > curr_junction.min_cost:
            parent_egg_of_curr_junction.min_cost = curr_junction.min_cost

        curr_junction = parent_egg_of_curr_junction.parent_junction
        if not curr_junction:
            break
        
        if curr_junction.left_child_egg.min_cost != -1 and curr_junction.right_child_egg.min_cost != -1:
            curr_junction.min_cost = curr_junction.left_child_egg.min_cost + curr_junction.right_child_egg.min_cost
        else:
            break

def print_path(egg):
    curr_egg = egg
    out_str = curr_egg.name
    while True:
        try:
            curr_egg = curr_egg = curr_egg.parent_junction.parent_egg_node
            out_str += " <- " + curr_egg.name
        except:
            print(out_str)
            return


            

def bfs(egg_name, debug):
    root_egg = EggNode(egg_name)
    
    unvisited = []
    visited = []

    unvisited.append(root_egg)
    num_child_junctions = len(egg_data.egg_data[egg_name]['junctionPairs'])

    # while unvisited != []:
    # while len([x for x in root_egg.child_junctions if x.min_cost != -1]) == 0:
    while len([x for x in root_egg.child_junctions if x.min_cost != -1]) < num_child_junctions:
        if debug:
            print("unvisited length: " + str(len(unvisited)))
        if unvisited == []:
            break
        curr_node = unvisited.pop(0) # remove and return item 0

        # print_path(curr_node)
        # print("")

        if debug:
            print(curr_node.name)

        # construct children data
        for i in range(0, len(egg_data.egg_data[curr_node.name]['junctionPairs'])):
            if debug:
                print("i = " + str(i))
            junction_pairs = egg_data.egg_data[curr_node.name]['junctionPairs']
            left_egg = EggNode(junction_pairs[i][0])
            right_egg = EggNode(junction_pairs[i][1])

            new_junction = Junction()           # create a new junction
            new_junction.junction_id = i
            add_left_egg_to_junction(left_egg, new_junction)
            add_right_egg_to_junction(right_egg, new_junction)
            add_child_junction_to_egg_node(new_junction, curr_node)

            parent_egg_node = None
            try:
                parent_egg_node = curr_node.parent_junction.parent_egg_node
            except:
                parent_egg_node = None # no-op

            if parent_egg_node:
                parent_egg_junction_path = parent_egg_node.junction_path
                if curr_node.name in parent_egg_junction_path:
                    if debug:
                        print("skipping junction to prevent cycle...")
                    curr_node.child_junctions.pop()
                    del left_egg
                    del right_egg
                    del new_junction
                    continue # don't add the child if it will cause a cycle
                # copy the previous egg's junction path for each egg
                for egg_name_in_path in parent_egg_junction_path:
                    left_egg.junction_path[egg_name_in_path] = True
                    right_egg.junction_path[egg_name_in_path] = True
            # put the current egg node in the junction path of these children
            left_egg.junction_path[curr_node.name] = True
            right_egg.junction_path[curr_node.name] = True

        if debug:
            print("number of child junctions: " + str(len(curr_node.child_junctions)))

        for child_junction in curr_node.child_junctions:
            left_egg = child_junction.left_child_egg
            right_egg = child_junction.right_child_egg
            if debug:
                print("\t" + left_egg.name + ", " + right_egg.name)
                print("\t\tLeft egg: " + str(len(left_egg.junction_path)))
                print("\t\tRight egg: " + str(len(right_egg.junction_path)))
            if left_egg.egg_level == 1 and right_egg.egg_level == 1:
                if left_egg.name == right_egg.name:
                    child_junction.min_cost = 1
                else:
                    child_junction.min_cost = 2
                left_egg.min_cost = 1
                right_egg.min_cost = 1
                update_parent_costs(child_junction)
                continue
                # return curr_node

        if debug:
            print("================================================")
            raw_input("Press Enter to continue...")

        for child_junction in curr_node.child_junctions:
            left_egg = child_junction.left_child_egg
            right_egg = child_junction.right_child_egg
            for child in [left_egg, right_egg]:
                if child in visited:
                    continue
                
                if child not in unvisited:
                    unvisited.append(child)

        visited.append(curr_node)
    return root_egg

# root_egg_name = "Protect"
# print(root_egg_name + "...")
# result_egg = bfs(root_egg_name, debug=True)
# print("Minimum cost: " + str(result_egg.min_cost))

root_egg_name = "Protect"
print(root_egg_name + "...")
result_egg = bfs(root_egg_name, debug=False)
print("Minimum cost: " + str(result_egg.min_cost))

# for root_egg_name in sorted(egg_data.egg_data, key=lambda k: egg_data.egg_data[k]['eggLevel']):
#     print(root_egg_name)
#     result_egg = bfs(root_egg_name, debug=False)
#     print("\tMinimum cost: " + str(result_egg.min_cost))
#     print("")
