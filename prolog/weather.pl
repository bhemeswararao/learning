/*weather(City, Season, Temp).*/

weather(phoenix, summer, hot).
weather(la, summer, warm).
weather(phoenix, winter, warm).

%% weather(CITY, summer, hot).

%% weather(CITY, _, warm). (press n)

%% weather(City,summer,hot), weather(City, winter, warm). (hot in summer AND warm in winter)

warmer_than(C1, C2) :-
  weather(C1, summer, hot),
  weather(C2, summer, warm),
  write(C1), write(' is warmer than '), write(C2), nl.
