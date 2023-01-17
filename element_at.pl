element_at(X, [X|_], 1).
element_at(X, [_|T], I) :-
    I > 1,
    J is I - 1,
    element_at(X, T, J).