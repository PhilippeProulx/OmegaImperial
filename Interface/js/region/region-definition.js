class RegionId extends Enum {} RegionId.initEnum(
  ['Berlin', 'Cologne', 'Hamburg', 'Munich', 'Gbansk',
   'Paris', 'Dijon', 'Brest', 'Marseille', 'Bordeaux',
   'Holland', 'Belgium']);

if (typeof Definition == 'undefined')
{
  var Definition = {}
}

Definition.region = new Array()

Definition.region[RegionId.Berlin] =
{
  shape: 'm 892.76786,259.8622 6.26791,-0.46975 3.03046,1.76777 3.15672,-3.283 4.16688,-4.29314 8.08122,-0.12627 3.283,-3.15673 6.9448,-1.6415 1.26269,-5.55584 7.82868,2.52538 4.16688,-0.75761 1.13642,-5.68211 5.42957,-0.37881 1.6415,5.93465 -6.56599,2.27284 0.50508,4.9245 10.73287,1.51523 1.64149,6.56599 10.73287,0.63134 2.27285,7.70242 3.91434,5.55584 -3.91434,10.10152 -3.6618,7.57614 -3.66181,5.05077 8.20749,9.34391 2.02031,5.3033 -0.75762,6.81853 4.16688,2.14657 -0.75761,11.99557 -3.15673,4.67195 9.09137,21.71828 -0.3788,8.71257 -8.33376,0.3788 -8.46003,2.27285 -13.63706,4.92449 -10.73287,5.42957 -10.73287,4.79822 -10.48033,4.67196 -14.77348,-0.63134 -9.21765,-2.65166 -13.22738,-2.57606 -1.42858,-11.60714 -7.11222,-4.67535 -0.68158,-8.33562 4.22238,-4.6676 4.28571,-8.75 2.17164,-15.65116 -2.70735,-6.84884 0.35714,-6.51786 3.39286,-3.57143 0.44642,-14.55357 3.57143,-5.89286 10.80357,-0.80357 1.16072,-3.66071 -8.57143,-7.67857 4.10714,-8.21429 -3.66071,-4.91071 z',
  nationId: NationId.GermanEmpire, name: 'Berlin', namePosition: {x: 925, y: 305},
  pieceSlots: [new Point(920, 295), new Point(930, 350), new Point(950, 275), 
               new Point(900, 340), new Point(915, 270), new Point(950, 305),
               new Point(905, 370), new Point(960, 355)]
}

Definition.region[RegionId.Cologne] =
{
  shape: 'm 805.71429,322.54077 17.5,-0.17857 7.32143,-6.60714 7.67857,3.39285 7.67857,0.53572 8.92857,7.14286 13.75,-0.53572 10.17858,-2.85714 2.70735,6.84884 -2.17164,15.65116 -4.28571,8.75 -4.22238,4.6676 0.68158,8.33562 7.11222,4.67535 1.42858,11.60714 -13.21429,-0.17857 -7.14286,-2.32143 -9.82143,3.92858 -5,6.07142 0.71429,14.10715 -6.25,4.64285 -9.28572,0 -11.07142,-13.03571 -10.35715,-6.07143 -22.32143,-0.53571 -8.92857,-2.5 -2.67857,-8.21429 1.78572,-9.64286 -2.14286,-5.71428 6.42857,-7.14286 -0.71429,-5.71429 9.82143,-10.53571 0,-14.28571 9.28572,-0.53572 z',
  nationId: NationId.GermanEmpire, name: 'Cologne', namePosition: {x: 825, y: 340},
  pieceSlots: [new Point(830, 335), new Point(835, 385), new Point(805, 380), 
               new Point(860, 365), new Point(800, 335), new Point(865, 340),
               new Point(790, 360), new Point(830, 360)]
}

Definition.region[RegionId.Hamburg] =
{
  shape: 'm 850.35715,214.50505 9.19643,-6.33928 7.85714,2.05357 -3.21429,8.39286 4.19643,8.83929 5.625,3.03571 0.71429,10.35714 7.94643,1.42857 3.66071,3.92858 8.39286,-0.71429 1.07143,5.26786 -4.91072,4.82143 1.875,4.28571 -2.41071,7.76786 3.66071,4.91071 -4.10714,8.21429 8.57143,7.67857 -1.16072,3.66071 -10.80357,0.80357 -3.57143,5.89286 -0.44642,14.55357 -3.39286,3.57143 -0.35714,6.51786 -10.17858,2.85714 -13.75,0.53572 -8.92857,-7.14286 -7.67857,-0.53572 -7.67857,-3.39285 -7.32143,6.60714 -17.5,0.17857 -0.68076,-7.99749 6.20011,-1.61205 1.98344,-7.06784 -1.56503,-6.3372 -5.372,-0.66939 -1.51998,-1.86703 1.02056,-2.18228 5.15944,0.0737 3.49479,-1.39687 0.033,-5.96386 2.3994,-9.64778 -2.23604,-5.43665 1.35073,-5.31597 4.06283,-1.71602 2.76099,3.88411 2.02687,-0.26626 2.60836,-3.42886 4.69105,1.21028 6.43425,4.87048 3.57691,-1.04934 3.30734,-3.99917 2.17693,-5.57446 5.83241,-0.80348 0.51581,-5.64333 -0.15894,-8.92503 -3.57261,-2.45732 -0.1199,-2.42465 5.31804,-0.66421 0.60295,-5.18524 -3.89095,-5.40909 -2.28013,-6.39328 0.48299,-8.64014 z',
  nationId: NationId.GermanEmpire, name: 'Hamburg', namePosition: {x: 855, y:265},
  pieceSlots: [new Point(850, 300), new Point(870, 260), new Point(825, 310), 
               new Point(870, 315), new Point(865, 235), new Point(835, 265),
               new Point(860, 210), new Point(870, 285)]
}

Definition.region[RegionId.Munich] =
{
  shape: 'm 902.44504,389.19706 8.46002,13.00571 5.42957,10.35406 6.69226,9.34391 1.89404,6.18719 20.8344,17.80394 -11.36422,16.03617 -16.41498,3.15673 -12.62691,13.88959 -0.75761,6.06092 -10.2278,-1.38896 -15.65736,2.77792 -5.3033,2.77792 -7.07107,-4.67196 -15.02602,-0.75761 -17.80394,-11.11168 -27.27412,-0.50508 -12.75317,1.01016 -1.38896,-7.70242 -4.79823,-4.29315 7.70242,-12.2481 -1.76777,-16.79378 -18.43528,-10.10153 -1.13643,-11.61675 9.97526,-2.52538 1.89404,-8.20749 -8.19845,-11.6009 8.92857,2.5 22.32143,0.53571 10.35715,6.07143 11.07142,13.03571 9.28572,0 6.25,-4.64285 -0.71429,-14.10715 5,-6.07142 9.82143,-3.92858 7.14286,2.32143 13.21429,0.17857 13.22738,2.57606 z',
  nationId: NationId.GermanEmpire, name: 'Munich', namePosition: {x: 860, y: 420},
  pieceSlots: [new Point(865, 410), new Point(895, 415), new Point(905, 445), 
               new Point(880, 465), new Point(850, 460), new Point(815, 455),
               new Point(820, 430), new Point(800, 410)]
}

Definition.region[RegionId.Gbansk] =
{
  shape: 'm 966.21091,260.65514 8.07481,-1.86437 3.125,-3.21428 24.82138,-8.66072 5.9822,-4.55357 1.6071,-4.82143 5.3572,-1.25 10.7143,-6.78571 11.4285,-4.10715 10.3572,0.89286 5.8928,6.96429 16.25,-0.53572 9.8215,-10 2.3214,-6.78571 18.3928,-0.35714 5,-2.5 0,-9.46429 1.25,-8.39286 10,7.32143 14.8215,3.39286 8.9285,7.32143 5.8929,9.82143 -1.0371,23.84934 -4.4209,10.86223 -11.986,10.08665 -22.1428,4.36866 -25.7756,6.6415 -7.8227,3.63269 -6.2896,6.6251 -13.7501,6.20667 -8.8801,3.40554 -12.0075,13.17994 -2.482,13.10596 3.2015,13.03572 8.2143,13.21428 13.5715,6.96429 6.6071,13.21428 5.8929,13.39286 1.6071,10.89286 -6.0714,10.71428 -8.0357,1.78572 -5.8929,-8.21429 -3.9286,-8.92857 -8.75,-4.64286 -9.6428,2.67858 -1.0715,6.42857 -7.8571,-1.42857 -3.75,-10.35715 4.4643,-7.14286 -6.7857,-6.96428 -15.00002,0.89286 -16.83314,-3.22398 0.3788,-8.71257 -9.09137,-21.71828 3.15673,-4.67195 0.75761,-11.99557 -4.16688,-2.14657 0.75762,-6.81853 -2.02031,-5.3033 -8.20749,-9.34391 3.66181,-5.05077 3.6618,-7.57614 3.91434,-10.10152 -3.91434,-5.55584 z',
  nationId: NationId.GermanEmpire, name: 'Gbansk', namePosition: {x: 1050, y: 240},
  pieceSlots: [new Point(1000, 270), new Point(1030, 280), new Point(1005, 300), 
               new Point(995, 330), new Point(1020, 350), new Point(1090, 260),
               new Point(1120, 250), new Point(1095, 235)]
}

Definition.region[RegionId.Holland] =
{
  shape: 'm 779.45896,275.42862 9.21764,-4.41941 18.8141,0.12627 1.76776,4.41941 5.37276,-3.11886 2.23604,5.43665 -2.3994,9.64778 -0.033,5.96386 -3.49479,1.39687 -5.15944,-0.0737 -1.02056,2.18228 1.51998,1.86703 5.372,0.66939 1.56503,6.3372 -1.98344,7.06784 -6.20011,1.61205 0.68076,7.99749 -6.60714,3.75 -9.28572,0.53572 0,14.28571 -9.82143,10.53571 0.71429,5.71429 -3.65444,4.05566 -4.16688,-7.70241 3.40927,-9.72272 -10.35407,-1.13642 -8.20749,-6.9448 -10.85914,2.27284 -10.85914,-6.43973 7.57615,-3.28299 9.09137,-3.91434 -4.92449,-9.72272 9.59644,-9.72271 3.40927,-11.8693 3.15673,-7.82868 5.93464,0.50508 2.39912,5.93464 -3.91435,4.79823 1.13643,7.57614 6.56599,4.41942 8.83883,0.37881 0.63135,-9.34391 -3.91434,-5.05077 0.3788,-6.06091 -3.15672,-3.91434 z',
  nationId: NationId.Neutral, name: 'Holland', namePosition: {x: 775, y: 300},
  pieceSlots: [new Point(795, 300), new Point(800, 280), new Point(775, 335), 
               new Point(775, 280), new Point(750, 325), new Point(775, 315),
               new Point(755, 300), new Point(750, 275)]
}

Definition.region[RegionId.Belgium] =
{
  shape: 'm 773.65058,410.41026 -9.59644,-5.05076 -8.20749,-0.88389 -5.80838,-15.27855 -21.71828,-0.25254 -3.03046,-15.27856 -10.35406,-2.39911 -0.50508,-6.9448 -6.69226,-2.02031 0.50508,-7.07106 -12.37437,-5.17704 0.63134,-11.86929 20.45559,-0.12627 19.06663,-6.31346 10.85914,6.43973 10.85914,-2.27284 8.20749,6.9448 10.35407,1.13642 -3.40927,9.72272 4.16688,7.70241 -2.77413,3.0872 2.14286,5.71428 -1.78572,9.64286 2.67857,8.21429 8.19845,11.6009 -1.89404,8.20749 z',
  nationId: NationId.Neutral, name: 'Belgium', namePosition: {x: 740, y: 340},
  pieceSlots: [new Point(740, 375), new Point(765, 375), new Point(765, 400), 
               new Point(735, 345), new Point(760, 350), new Point(720, 360),
               new Point(710, 340), new Point(710, 320)]
}

Definition.region[RegionId.Paris] =
{
  shape: 'm 728.31999,388.94452 -2.6057,2.52482 0.26786,12.14286 -6.96429,5.26786 -0.44643,10.80357 -11.60714,6.25 -11.42857,0.89286 -1.60714,8.75 -28.75,-9.28572 -9.46429,5.35715 -10,-5.53572 -7.14286,0.89286 -2.85714,2.5 -9.10714,-1.07143 -8.57143,-17.5 -24.82143,-6.25 0.53571,-12.5 2.67857,-7.14286 -4.64285,-15 5.89285,-5.89286 7.32143,4.46429 -0.17857,12.67857 15.53572,4.64286 6.07143,3.39286 12.32142,-1.25 2.14286,-11.60715 9.64286,-3.75 16.42857,-1.07143 9.64286,-6.78571 5.17857,-11.07143 2.32143,-11.07143 12.39303,-4.53499 -0.63134,11.86929 12.37437,5.17704 -0.50508,7.07106 6.69226,2.02031 0.50508,6.9448 10.35406,2.39911 z',
  nationId: NationId.France, name: 'Paris', namePosition: {x: 670, y: 380},
  pieceSlots: [new Point(690, 380), new Point(705, 400), new Point(680, 415), 
               new Point(650, 415), new Point(630, 400), new Point(605, 395),
               new Point(660, 380), new Point(690, 355)]
}

Definition.region[RegionId.Dijon] =
{
  shape: 'm 793.47483,473.16599 -2.52538,9.97525 -16.66752,5.3033 -12.87945,18.94036 -5.74524,13.00572 -15.21542,0.63134 -14.64721,8.33376 -5.05077,-0.50507 -8.83883,6.06091 -6.56599,-4.79822 -5.80838,1.51523 -9.84899,12.6269 -8.83883,0 -1.01015,-7.57614 2.27284,-10.10153 -10.85914,-9.34391 -13.63706,-0.75761 -8.5863,-11.61676 6.81853,-3.28299 -0.25253,-7.32361 -7.07107,-11.36422 10.6066,-10.85914 1.76777,-19.69797 -1.51523,-12.62691 -3.66279,-8.05676 9.46429,-5.35715 28.75,9.28572 1.60714,-8.75 11.42857,-0.89286 11.60714,-6.25 0.44643,-10.80357 6.96429,-5.26786 -0.26786,-12.14286 2.6057,-2.52482 21.71828,0.25254 5.80838,15.27855 8.20749,0.88389 9.59644,5.05076 1.13643,11.61675 18.43528,10.10153 1.76777,16.79378 -7.70242,12.2481 4.79823,4.29315 z',
  nationId: NationId.France, name: 'Dijon', namePosition: {x: 720, y: 450},
  pieceSlots: [new Point(730, 445), new Point(755, 465), new Point(740, 490), 
               new Point(710, 495), new Point(680, 490), new Point(680, 460),
               new Point(740, 415), new Point(760, 435)]
}

Definition.region[RegionId.Brest] =
{
  shape: 'm 649.02301,504.85952 -7.07106,-1.76776 -16.41498,-8.33376 -6.81853,-0.25254 -5.3033,2.77792 -7.07107,-0.75762 -17.1726,-8.83883 -3.03045,-5.55584 -7.07107,1.51523 -3.53553,3.28299 -7.32361,-8.58629 -5.55584,-5.3033 1.26269,-10.35407 5.05076,-8.58629 -7.57614,-4.04061 -4.04061,-8.33376 -10.6066,-7.82868 -17.67767,-13.38453 -8.33376,-2.77792 -0.75761,-9.59644 6.81852,-4.29315 -12.87944,-3.53554 5.3033,-8.08122 21.71828,1.01016 7.57614,-3.53554 9.09138,1.26269 1.51523,9.59645 12.37437,1.01015 12.87944,2.02031 8.84104,1.0919 24.82143,6.25 8.57143,17.5 9.10714,1.07143 2.85714,-2.5 7.14286,-0.89286 10,5.53572 3.66279,8.05676 1.51523,12.62691 -1.76777,19.69797 -10.6066,10.85914 7.07107,11.36422 0.25253,7.32361 -6.81853,3.28299 z',
  nationId: NationId.France, name: 'Brest', namePosition: {x: 610, y: 435},
  pieceSlots: [new Point(610, 430), new Point(580, 420), new Point(550, 415), 
               new Point(640, 445), new Point(640, 470), new Point(615, 480),
               new Point(590, 470), new Point(585, 445)]
}

Definition.region[RegionId.Marseille] =
{
  shape: 'm 755.65724,520.39062 2.71479,3.15672 7.95495,-2.0203 1.76777,-7.44988 6.56599,-1.64149 3.40926,3.40926 -0.75761,8.33376 3.15672,7.19734 -5.80837,6.43972 2.77792,8.08122 -9.72272,9.59645 -13.38452,6.9448 -0.25254,9.09137 9.84899,4.04061 -2.77792,11.86929 -1.51523,12.12183 12.12183,7.82869 3.53553,5.3033 -11.36421,8.58629 -10.60661,9.34391 -15.40482,0 -10.6066,-10.85913 -9.84899,-5.30331 -15.9099,-6.06091 -9.84899,-3.283 -10.10153,7.57615 -8.58629,4.04061 -4.79823,10.35406 -0.50507,15.65737 -17.42514,1.01015 -22.47589,-13.13199 -1.01015,-10.6066 -19.95052,-0.25253 -5.3033,-4.79823 2.02031,-13.38452 12.87944,-5.55584 -0.50507,-11.36422 6.56599,-4.29314 10.6066,-0.50508 4.04061,-7.07107 8.08122,-2.0203 5.80838,-13.13199 23.99112,-1.76776 5.80838,-11.61676 8.83883,0 9.84899,-12.6269 5.80838,-1.51523 6.56599,4.79822 8.83883,-6.06091 5.05077,0.50507 14.64721,-8.33376 z',
  nationId: NationId.France, name: 'Marseille', namePosition: {x: 695, y: 560},
  pieceSlots: [new Point(700, 555), new Point(730, 550), new Point(755, 540), 
               new Point(740, 575), new Point(745, 605), new Point(715, 595),
               new Point(675, 595), new Point(645, 600)]
}

Definition.region[RegionId.Bordeaux] =
{
  shape: 'm 601.54584,614.96615 -7.3236,5.80838 -9.59645,-3.283 -20.45559,-7.07107 -2.27284,-5.55584 -15.40483,-2.77791 -1.26269,-13.38453 8.83883,-6.06091 7.82869,-25.00128 5.3033,-18.43528 5.55584,-21.46574 6.31345,6.06091 9.09137,27.7792 -4.29315,-28.03174 -9.09137,-19.19289 3.283,-9.09138 -2.52538,-8.33376 3.53553,-3.28299 7.07107,-1.51523 3.03045,5.55584 17.1726,8.83883 7.07107,0.75762 5.3033,-2.77792 6.81853,0.25254 16.41498,8.33376 7.07106,1.76776 8.5863,11.61676 13.63706,0.75761 10.85914,9.34391 -2.27284,10.10153 1.01015,7.57614 -5.80838,11.61676 -23.99112,1.76776 -5.80838,13.13199 -8.08122,2.0203 -4.04061,7.07107 -10.6066,0.50508 -6.56599,4.29314 0.50507,11.36422 -12.87944,5.55584 z',
  nationId: NationId.France, name: 'Bordeaux', namePosition: {x: 630, y: 520},
  pieceSlots: [new Point(600, 515), new Point(630, 515), new Point(635, 555), 
               new Point(605, 560), new Point(575, 565), new Point(570, 590),
               new Point(600, 585), new Point(665, 535)]
}