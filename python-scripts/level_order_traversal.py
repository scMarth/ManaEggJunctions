'''

This solution fails because of infinite loops.

Needs junction pair cycle detection

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

def bfs(egg_name):
    root_egg = EggNode(egg_name)
    
    unvisited = []
    visited = []

    unvisited.append(root_egg)

    while unvisited != []:
        curr_node = unvisited.pop(0) # remove and return item 0
        print(curr_node.name)

        # construct children data
        for i in range(0, len(egg_data.egg_data[curr_node.name]['junctionPairs'])):
            junction_pairs = egg_data.egg_data[curr_node.name]['junctionPairs']
            left_egg = EggNode(junction_pairs[i][0])
            right_egg = EggNode(junction_pairs[i][1])
            new_junction = Junction()
            new_junction.junction_id = i
            add_left_egg_to_junction(left_egg, new_junction)
            add_right_egg_to_junction(right_egg, new_junction)
            add_child_junction_to_egg_node(new_junction, curr_node)

        for child_junction in curr_node.child_junctions:
            left_egg = child_junction.left_child_egg
            right_egg = child_junction.right_child_egg
            print("\t" + left_egg.name + ", " + right_egg.name)
            if left_egg.egg_level == 1 and right_egg.egg_level == 1:
                # print(left_egg.name)
                # print(right_egg.name)
                return curr_node

        # raw_input("Press Enter to continue...")

        for child_junction in curr_node.child_junctions:
            left_egg = child_junction.left_child_egg
            right_egg = child_junction.right_child_egg
            for child in [left_egg, right_egg]:
                if child in visited:
                    continue
                
                if child not in unvisited:
                    unvisited.append(child)

        visited.append(curr_node)

print("Star Egg...")
result_egg = bfs("Star")

