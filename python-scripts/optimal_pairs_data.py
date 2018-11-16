class OptimalPairsData(object):
    '''
    public variable

    for each egg, store an array telling which indeces of its junctions are the
    optimal junction pairs
    
    e,g, if the minimum cost way to make a Heat egg is the first junction in
    eggData['Heat'].junctionPairs[] is listed in junctionPairs[0] (the first junction pair)
    then optimal_pairs['Heat'] will be an array containing the single integer 0 (for index 0)
    
    if there are more, for example, 2 junction pairs both are the minimum cost junctions, 
    the array will contain indeces for both of those junctions
    '''
    optimal_pairs = {
        "Holy" : [],
        "Fenrir" : [],
        "Protect" : [],
        "Astral" : [],
        "Dragon" : [],
        "Chaos" : [],
        "Booster" : [],
        "Flare" : [],
        "Wind" : [],
        "Aqua" : [],
        "Stone" : [],
        "Dust" : [],
        "Decrease" : [],
        "Lava" : [],
        "Heat" : [],
        "Mist" : [],
        "Sand" : [],
        "Burst" : [],
        "Darkness" : [],
        "Bomb" : [],
        "Thunder" : [],
        "Frost" : [],
        "Leaf" : [],
        "Restore" : [],
        "Void" : [],
        "Star" : [],
        "Lightning" : [],
        "Icicle" : [],
        "Forest" : [],
        "Fairy" : [],
        "Calamity" : [],
        "Volcano" : [],
        "Cyclone" : [],
        "Rainbow" : [],
        "Gravity" : [],
        "Life" : [],
        "Ether" : [],
        "Cluster" : [],
        "Photon" : [],
        "Blizzard" : [],
        "Soul" : [],
        "Crown" : []
    }    

    '''
    for each egg, store whether or not we have determined its optimal junction pairs
    False = hasn't been visited
    True = has been visited
    '''
    visited_eggs = {
        "Holy" : False,
        "Fenrir" : False,
        "Protect" : False,
        "Astral" : False,
        "Dragon" : False,
        "Chaos" : False,
        "Booster" : False,
        "Flare" : False,
        "Wind" : False,
        "Aqua" :False,
        "Stone" : False,
        "Dust" : False,
        "Decrease" : False,
        "Lava" : False,
        "Heat" : False,
        "Mist" : False,
        "Sand" : False,
        "Burst" : False,
        "Darkness" : False,
        "Bomb" : False,
        "Thunder" : False,
        "Frost" : False,
        "Leaf" : False,
        "Restore" : False,
        "Void" : False,
        "Star" : False,
        "Lightning" : False,
        "Icicle" : False,
        "Forest" : False,
        "Fairy" : False,
        "Calamity" : False,
        "Volcano" : False,
        "Cyclone" : False,
        "Rainbow" : False,
        "Gravity" : False,
        "Life" : False,
        "Ether" : False,
        "Cluster" : False,
        "Photon" : False,
        "Blizzard" : False,
        "Soul" : False,
        "Crown" : False
    }

    '''
    a mapping from egg name to an map, which maps junction indexes for that egg to its minimum cost
    '''
    min_eggs_to_make = {
        "Holy" : {},
        "Fenrir" : {},
        "Protect" : {},
        "Astral" : {},
        "Dragon" : {},
        "Chaos" : {},
        "Booster" : {},
        "Flare" : {},
        "Wind" : {},
        "Aqua" : {},
        "Stone" : {},
        "Dust" : {},
        "Decrease" : {},
        "Lava" : {},
        "Heat" : {},
        "Mist" : {},
        "Sand" : {},
        "Burst" : {},
        "Darkness" : {},
        "Bomb" : {},
        "Thunder" : {},
        "Frost" : {},
        "Leaf" : {},
        "Restore" : {},
        "Void" : {},
        "Star" : {},
        "Lightning" : {},
        "Icicle" : {},
        "Forest" : {},
        "Fairy" : {},
        "Calamity" : {},
        "Volcano" : {},
        "Cyclone" : {},
        "Rainbow" : {},
        "Gravity" : {},
        "Life" : {},
        "Ether" : {},
        "Cluster" : {},
        "Photon" : {},
        "Blizzard" : {},
        "Soul" : {},
        "Crown" : {}
    }