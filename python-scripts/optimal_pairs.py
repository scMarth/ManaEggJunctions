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
    if (egg_data[egg_name].egg_level == 1):
        return 1
    else:
        if (optimal_pairs_vars.visited_eggs[egg_name] == 1):
            return optimal_pairs_vars.min_eggs_to_make[egg_name]

def get_optimal_pairs():

    for lvl in range(1, len(egg_data.egg_levels)):
        print ("LEVEL " + str(lvl))
        for i in range(0, len(egg_data.egg_levels[lvl])):
            name = egg_data.egg_levels[lvl][i]
            print(name)
            min_eggs(name)
        print("")



# for item in egg_data.egg_levels:
#     print(item)

# for item in optimal_pairs_vars.min_eggs_to_make:
#     print(str(item) + " : " + str(optimal_pairs_vars.min_eggs_to_make[item]))

# my_egg_node = EggNode('Fenrir')

# print(my_egg_node.min_cost)

get_optimal_pairs()

