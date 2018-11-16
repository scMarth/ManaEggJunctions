'''

Assumption: may need to be proven: If you have an egg and traverse its junctions in breadth-first order,
then the first immediate child junction of that egg to have its cost computed is the lowest cost junction.
I feel like the correctness of this claim can be proven with induction.

'''
import sys
import json
import datetime

import egg_data
import optimal_pairs_data
from mana_eggs import EggNode, Junction

def add_child_junction_to_egg_node(child_junction, target_egg_node):
    child_junction.parent_egg_node = target_egg_node
    target_egg_node.child_junctions.append(child_junction)

def add_left_egg_to_junction(left_egg_node, target_junction):
    left_egg_node.parent_junction = target_junction
    target_junction.left_child_egg = left_egg_node

def add_right_egg_to_junction(right_egg_node, target_junction):
    right_egg_node.parent_junction = target_junction
    target_junction.right_child_egg = right_egg_node

def update_costs(node, node_type):
    while True:
        # print(node_type)
        if node_type == "junction": # 'node' is a junction
            parent_egg = node.parent_egg_node
            if not parent_egg:
                break
            if parent_egg.min_cost == -1 or parent_egg.min_cost > node.min_cost:
                parent_egg.min_cost = node.min_cost
            node = parent_egg
            node_type = "egg"
        else: # 'node' is an egg
            parent_junction = node.parent_junction
            if not parent_junction:
                break
            if parent_junction.left_child_egg.min_cost != -1 and parent_junction.right_child_egg.min_cost != -1:
                if parent_junction.left_child_egg.min_cost + parent_junction.right_child_egg.min_cost < parent_junction.min_cost or parent_junction.min_cost == -1:
                    parent_junction.min_cost = parent_junction.left_child_egg.min_cost + parent_junction.right_child_egg.min_cost
                else:
                    break
            else:
                break
            node = parent_junction
            node_type = "junction"

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

def bfs(egg_name, optimal_pairs_vars, debug):
    root_egg = EggNode(egg_name)
    
    unvisited = []
    visited = []

    unvisited.append(root_egg)
    num_child_junctions = len(egg_data.egg_data[egg_name]['junctionPairs'])

    while len([x for x in root_egg.child_junctions if x.min_cost != -1]) < num_child_junctions:
        if debug:
            print("unvisited length: " + str(len(unvisited)))
        if unvisited == []:
            break
        curr_node = unvisited.pop(0) # remove and return item 0

        # check to see if we already know this egg's minimum cost and optimal junction pair(s)
        if optimal_pairs_vars.visited_eggs[curr_node.name] == True:
            # get index of optimal pair junction
            curr_node_opt_pair = optimal_pairs_vars.optimal_pairs[curr_node.name][0]
            # get minimum cost
            curr_node_min_cost = optimal_pairs_vars.min_eggs_to_make[curr_node.name][curr_node_opt_pair]
            curr_node.min_cost = curr_node_min_cost
            update_costs(curr_node, node_type="egg")
            visited.append(curr_node)
            continue

        if debug:
            print_path(curr_node)
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
                update_costs(child_junction, node_type="junction")
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

absolute_start_time = datetime.datetime.now()
optimal_pairs_vars = optimal_pairs_data.OptimalPairsData()

for root_egg_name in sorted(egg_data.egg_data, key=lambda k: egg_data.egg_data[k]['eggLevel']):
    start_time = datetime.datetime.now()
    
    result_egg = bfs(root_egg_name, optimal_pairs_vars=optimal_pairs_vars, debug=False)
    print(root_egg_name + " ; Level " + str(egg_data.egg_data[root_egg_name]['eggLevel']) + " ; Minimum cost: " + str(result_egg.min_cost))

    # update data on optimal pairs
    # optimal_pairs_vars.min_eggs_to_make[result_egg.name] = result_egg.min_cost
    optimal_pairs_vars.visited_eggs[result_egg.name] = True

    end_time = datetime.datetime.now()
    for child_junction in result_egg.child_junctions:
        left_egg = child_junction.left_child_egg
        right_egg = child_junction.right_child_egg
        j_cost = child_junction.min_cost
        j_index = child_junction.junction_id
        optimal_pairs_vars.min_eggs_to_make[result_egg.name][j_index] = j_cost

        print("\t[" + left_egg.name + ", " + right_egg.name + "] min_cost: " + str(j_cost))

        # store optimal junctions
        if child_junction.min_cost == result_egg.min_cost:
            optimal_pairs_vars.optimal_pairs[result_egg.name].append(child_junction.junction_id)
    print("")

with open("../shared/js/optimal_pairs_vars.js", "w") as jsonfile:
    json_data = json.dumps({ \
        "optimal_pairs" : optimal_pairs_vars.optimal_pairs, \
        "min_eggs_to_make" : optimal_pairs_vars.min_eggs_to_make \
    })
    jsonfile.write("var optimal_pairs_vars = " + json_data + "\n")

absolute_end_time = datetime.datetime.now()
print("Total time elapsed: " + str(absolute_end_time - absolute_start_time))

