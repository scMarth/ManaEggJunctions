'''

In this algorithm, we assume that the minimum junction pair to create an egg can only be from
a pairing in which both eggs have a lower level than that egg, given that level 1 eggs cost 1,
and cost is defined as how many level 1 eggs it would take to create that egg.

This algorithm may or may not be correct??

'''


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

def min_eggs(egg_name):
    global optimal_pairs_vars
    if (egg_data.egg_data[egg_name]['eggLevel'] == 1):
        return 1
    else:
        # if the egg has been visited before, then we know that it's cost has already been computed
        if (optimal_pairs_vars.visited_eggs[egg_name] == True):
            return optimal_pairs_vars.min_eggs_to_make[egg_name]

        costs = []

        for i in range(0,len(egg_data.egg_data[egg_name]['junctionPairs'])):
            pair = egg_data.egg_data[egg_name]['junctionPairs'][i]
            left_egg = pair[0]
            right_egg = pair[1]

            # skip this pair if either the left or right egg hasn't been visited yet
            if (optimal_pairs_vars.visited_eggs[left_egg] == False or \
                optimal_pairs_vars.visited_eggs[right_egg] == False):
                    # print("skip")
                    continue

            # skip this pair if either the left or right egg has an undefined cost
            if (optimal_pairs_vars.min_eggs_to_make[left_egg] == -1 or \
                optimal_pairs_vars.min_eggs_to_make[right_egg] == -1):
                    # print("skip")
                    continue
            
            left_egg_cost = min_eggs(left_egg)
            right_egg_cost = min_eggs(right_egg)
            pair_cost = left_egg_cost + right_egg_cost
            costs.append(pair_cost)
            # print(pair_cost)

        # the minimum cost is simply the lowest value in the cost array
        min_cost = min(costs) if costs else -1
        # print("min_cost: " + (str(min_cost)))

        for i in range(0,len(egg_data.egg_data[egg_name]['junctionPairs'])):
            pair = egg_data.egg_data[egg_name]['junctionPairs'][i]
            left_egg = pair[0]
            right_egg = pair[1]

            # skip this pair if either the left or right egg hasn't been visited yet
            if (optimal_pairs_vars.visited_eggs[left_egg] == False or \
                optimal_pairs_vars.visited_eggs[right_egg] == False):
                    continue

            left_egg_cost = min_eggs(left_egg)
            right_egg_cost = min_eggs(right_egg)

            # if the cost of this pair is equal to the minumum cost, then it is an optimal pair
            # so, we add it to the optimal_pairs array
            if (left_egg_cost + right_egg_cost == min_cost):
                optimal_pairs_vars.optimal_pairs[egg_name].append(i)
                # print("optimal pair: " + str(i))

        # set this egg to visited
        optimal_pairs_vars.visited_eggs[egg_name] = True

        # store the minimum cost of this egg, so that we won't have to recompute it
        optimal_pairs_vars.min_eggs_to_make[egg_name] = min_cost

        return min_cost

def get_optimal_pairs():
    for lvl in range(1, len(egg_data.egg_levels)):
    # for lvl in range(1, 3):
        print ("LEVEL " + str(lvl))
        for i in range(0, len(egg_data.egg_levels[lvl])):
            name = egg_data.egg_levels[lvl][i]
            # print(name)
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

