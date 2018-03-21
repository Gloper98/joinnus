export const visibilityFilters = {
    SHOW_THEATER: 'SHOW_THEATER',
    SHOW_CONCERTS: 'SHOW_CONCERTS'
};

export const showConcertsFilter = (filter) => ({
    type: visibilityFilters.SHOW_CONCERTS,
    filter
});

export const showTheaterFilter = (filter) => ({
    type: visibilityFilters.SHOW_THEATER,
    filter
});


  