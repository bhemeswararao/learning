%% FACTS

%% johnny is hungry
hungry(johnny).
%% the dog is brown
brown(dog).
%% suzie likes bobby
likes(suzie, bobby).

%% RULES

likes(ryan, brittney).
likes(brittney, ryan).
likes(dan, josh).

dating(X,Y) :-
  likes(X,Y), %% and
  likes(Y,X).

friends(X,Y) :-
  likes(X,Y); %% or
  likes(Y,X).

loves(romeo, juliet).
