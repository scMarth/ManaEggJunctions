import egg_data

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
        self.egg_level = self.__get_egg_level(name)

    def __get_egg_level(self, name):
        return egg_data.egg_data[name]["eggLevel"]

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