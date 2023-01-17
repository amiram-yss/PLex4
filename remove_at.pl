remove_at(X, [X|T], 1, T).
remove_at(X, [H|T], I, [H|R]) :-
    I > 1,
    J is I - 1,
    remove_at(X, T, J, R).