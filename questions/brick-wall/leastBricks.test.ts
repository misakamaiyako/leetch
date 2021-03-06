import leastBricks from './leastBricks'

test('Test1',()=>{
	expect(leastBricks(
		[[1,2,2,1],
			[3,1,2],
			[1,3,2],
			[2,4],
			[3,1,2],
			[1,3,1,1]])).toBe(2)
},2000)
test('Test2',()=>{
	expect(leastBricks(
		[[1],[1],[1]])).toBe(3)
},2000)

test('Test3',()=>{
	expect(leastBricks([[1,1],[2],[1,1]])).toBe(1)
},2000)

test('Test4',()=>{
	expect(leastBricks([[7, 1, 2], [3, 5, 1, 1], [10]])).toBe(1)
},2000)
test('Test5',()=>{
	expect(leastBricks([
		[
			1,
			999999
		],
		[
			2,
			999998
		],
		[
			3,
			999997
		],
		[
			4,
			999996
		],
		[
			5,
			999995
		],
		[
			6,
			999994
		],
		[
			7,
			999993
		],
		[
			8,
			999992
		],
		[
			9,
			999991
		],
		[
			10,
			999990
		],
		[
			11,
			999989
		],
		[
			12,
			999988
		],
		[
			13,
			999987
		],
		[
			14,
			999986
		],
		[
			15,
			999985
		],
		[
			16,
			999984
		],
		[
			17,
			999983
		],
		[
			18,
			999982
		],
		[
			19,
			999981
		],
		[
			20,
			999980
		],
		[
			21,
			999979
		],
		[
			22,
			999978
		],
		[
			23,
			999977
		],
		[
			24,
			999976
		],
		[
			25,
			999975
		],
		[
			26,
			999974
		],
		[
			27,
			999973
		],
		[
			28,
			999972
		],
		[
			29,
			999971
		],
		[
			30,
			999970
		],
		[
			31,
			999969
		],
		[
			32,
			999968
		],
		[
			33,
			999967
		],
		[
			34,
			999966
		],
		[
			35,
			999965
		],
		[
			36,
			999964
		],
		[
			37,
			999963
		],
		[
			38,
			999962
		],
		[
			39,
			999961
		],
		[
			40,
			999960
		],
		[
			41,
			999959
		],
		[
			42,
			999958
		],
		[
			43,
			999957
		],
		[
			44,
			999956
		],
		[
			45,
			999955
		],
		[
			46,
			999954
		],
		[
			47,
			999953
		],
		[
			48,
			999952
		],
		[
			49,
			999951
		],
		[
			50,
			999950
		],
		[
			51,
			999949
		],
		[
			52,
			999948
		],
		[
			53,
			999947
		],
		[
			54,
			999946
		],
		[
			55,
			999945
		],
		[
			56,
			999944
		],
		[
			57,
			999943
		],
		[
			58,
			999942
		],
		[
			59,
			999941
		],
		[
			60,
			999940
		],
		[
			61,
			999939
		],
		[
			62,
			999938
		],
		[
			63,
			999937
		],
		[
			64,
			999936
		],
		[
			65,
			999935
		],
		[
			66,
			999934
		],
		[
			67,
			999933
		],
		[
			68,
			999932
		],
		[
			69,
			999931
		],
		[
			70,
			999930
		],
		[
			71,
			999929
		],
		[
			72,
			999928
		],
		[
			73,
			999927
		],
		[
			74,
			999926
		],
		[
			75,
			999925
		],
		[
			76,
			999924
		],
		[
			77,
			999923
		],
		[
			78,
			999922
		],
		[
			79,
			999921
		],
		[
			80,
			999920
		],
		[
			81,
			999919
		],
		[
			82,
			999918
		],
		[
			83,
			999917
		],
		[
			84,
			999916
		],
		[
			85,
			999915
		],
		[
			86,
			999914
		],
		[
			87,
			999913
		],
		[
			88,
			999912
		],
		[
			89,
			999911
		],
		[
			90,
			999910
		],
		[
			91,
			999909
		],
		[
			92,
			999908
		],
		[
			93,
			999907
		],
		[
			94,
			999906
		],
		[
			95,
			999905
		],
		[
			96,
			999904
		],
		[
			97,
			999903
		],
		[
			98,
			999902
		],
		[
			99,
			999901
		],
		[
			100,
			999900
		],
		[
			101,
			999899
		],
		[
			102,
			999898
		],
		[
			103,
			999897
		],
		[
			104,
			999896
		],
		[
			105,
			999895
		],
		[
			106,
			999894
		],
		[
			107,
			999893
		],
		[
			108,
			999892
		],
		[
			109,
			999891
		],
		[
			110,
			999890
		],
		[
			111,
			999889
		],
		[
			112,
			999888
		],
		[
			113,
			999887
		],
		[
			114,
			999886
		],
		[
			115,
			999885
		],
		[
			116,
			999884
		],
		[
			117,
			999883
		],
		[
			118,
			999882
		],
		[
			119,
			999881
		],
		[
			120,
			999880
		],
		[
			121,
			999879
		],
		[
			122,
			999878
		],
		[
			123,
			999877
		],
		[
			124,
			999876
		],
		[
			125,
			999875
		],
		[
			126,
			999874
		],
		[
			127,
			999873
		],
		[
			128,
			999872
		],
		[
			129,
			999871
		],
		[
			130,
			999870
		],
		[
			131,
			999869
		],
		[
			132,
			999868
		],
		[
			133,
			999867
		],
		[
			134,
			999866
		],
		[
			135,
			999865
		],
		[
			136,
			999864
		],
		[
			137,
			999863
		],
		[
			138,
			999862
		],
		[
			139,
			999861
		],
		[
			140,
			999860
		],
		[
			141,
			999859
		],
		[
			142,
			999858
		],
		[
			143,
			999857
		],
		[
			144,
			999856
		],
		[
			145,
			999855
		],
		[
			146,
			999854
		],
		[
			147,
			999853
		],
		[
			148,
			999852
		],
		[
			149,
			999851
		],
		[
			150,
			999850
		],
		[
			151,
			999849
		],
		[
			152,
			999848
		],
		[
			153,
			999847
		],
		[
			154,
			999846
		],
		[
			155,
			999845
		],
		[
			156,
			999844
		],
		[
			157,
			999843
		],
		[
			158,
			999842
		],
		[
			159,
			999841
		],
		[
			160,
			999840
		],
		[
			161,
			999839
		],
		[
			162,
			999838
		],
		[
			163,
			999837
		],
		[
			164,
			999836
		],
		[
			165,
			999835
		],
		[
			166,
			999834
		],
		[
			167,
			999833
		],
		[
			168,
			999832
		],
		[
			169,
			999831
		],
		[
			170,
			999830
		],
		[
			171,
			999829
		],
		[
			172,
			999828
		],
		[
			173,
			999827
		],
		[
			174,
			999826
		],
		[
			175,
			999825
		],
		[
			176,
			999824
		],
		[
			177,
			999823
		],
		[
			178,
			999822
		],
		[
			179,
			999821
		],
		[
			180,
			999820
		],
		[
			181,
			999819
		],
		[
			182,
			999818
		],
		[
			183,
			999817
		],
		[
			184,
			999816
		],
		[
			185,
			999815
		],
		[
			186,
			999814
		],
		[
			187,
			999813
		],
		[
			188,
			999812
		],
		[
			189,
			999811
		],
		[
			190,
			999810
		],
		[
			191,
			999809
		],
		[
			192,
			999808
		],
		[
			193,
			999807
		],
		[
			194,
			999806
		],
		[
			195,
			999805
		],
		[
			196,
			999804
		],
		[
			197,
			999803
		],
		[
			198,
			999802
		],
		[
			199,
			999801
		],
		[
			200,
			999800
		],
		[
			201,
			999799
		],
		[
			202,
			999798
		],
		[
			203,
			999797
		],
		[
			204,
			999796
		],
		[
			205,
			999795
		],
		[
			206,
			999794
		],
		[
			207,
			999793
		],
		[
			208,
			999792
		],
		[
			209,
			999791
		],
		[
			210,
			999790
		],
		[
			211,
			999789
		],
		[
			212,
			999788
		],
		[
			213,
			999787
		],
		[
			214,
			999786
		],
		[
			215,
			999785
		],
		[
			216,
			999784
		],
		[
			217,
			999783
		],
		[
			218,
			999782
		],
		[
			219,
			999781
		],
		[
			220,
			999780
		],
		[
			221,
			999779
		],
		[
			222,
			999778
		],
		[
			223,
			999777
		],
		[
			224,
			999776
		],
		[
			225,
			999775
		],
		[
			226,
			999774
		],
		[
			227,
			999773
		],
		[
			228,
			999772
		],
		[
			229,
			999771
		],
		[
			230,
			999770
		],
		[
			231,
			999769
		],
		[
			232,
			999768
		],
		[
			233,
			999767
		],
		[
			234,
			999766
		],
		[
			235,
			999765
		],
		[
			236,
			999764
		],
		[
			237,
			999763
		],
		[
			238,
			999762
		],
		[
			239,
			999761
		],
		[
			240,
			999760
		],
		[
			241,
			999759
		],
		[
			242,
			999758
		],
		[
			243,
			999757
		],
		[
			244,
			999756
		],
		[
			245,
			999755
		],
		[
			246,
			999754
		],
		[
			247,
			999753
		],
		[
			248,
			999752
		],
		[
			249,
			999751
		],
		[
			250,
			999750
		],
		[
			251,
			999749
		],
		[
			252,
			999748
		],
		[
			253,
			999747
		],
		[
			254,
			999746
		],
		[
			255,
			999745
		],
		[
			256,
			999744
		],
		[
			257,
			999743
		],
		[
			258,
			999742
		],
		[
			259,
			999741
		],
		[
			260,
			999740
		],
		[
			261,
			999739
		],
		[
			262,
			999738
		],
		[
			263,
			999737
		],
		[
			264,
			999736
		],
		[
			265,
			999735
		],
		[
			266,
			999734
		],
		[
			267,
			999733
		],
		[
			268,
			999732
		],
		[
			269,
			999731
		],
		[
			270,
			999730
		],
		[
			271,
			999729
		],
		[
			272,
			999728
		],
		[
			273,
			999727
		],
		[
			274,
			999726
		],
		[
			275,
			999725
		],
		[
			276,
			999724
		],
		[
			277,
			999723
		],
		[
			278,
			999722
		],
		[
			279,
			999721
		],
		[
			280,
			999720
		],
		[
			281,
			999719
		],
		[
			282,
			999718
		],
		[
			283,
			999717
		],
		[
			284,
			999716
		],
		[
			285,
			999715
		],
		[
			286,
			999714
		],
		[
			287,
			999713
		],
		[
			288,
			999712
		],
		[
			289,
			999711
		],
		[
			290,
			999710
		],
		[
			291,
			999709
		],
		[
			292,
			999708
		],
		[
			293,
			999707
		],
		[
			294,
			999706
		],
		[
			295,
			999705
		],
		[
			296,
			999704
		],
		[
			297,
			999703
		],
		[
			298,
			999702
		],
		[
			299,
			999701
		],
		[
			300,
			999700
		],
		[
			301,
			999699
		],
		[
			302,
			999698
		],
		[
			303,
			999697
		],
		[
			304,
			999696
		],
		[
			305,
			999695
		],
		[
			306,
			999694
		],
		[
			307,
			999693
		],
		[
			308,
			999692
		],
		[
			309,
			999691
		],
		[
			310,
			999690
		],
		[
			311,
			999689
		],
		[
			312,
			999688
		],
		[
			313,
			999687
		],
		[
			314,
			999686
		],
		[
			315,
			999685
		],
		[
			316,
			999684
		],
		[
			317,
			999683
		],
		[
			318,
			999682
		],
		[
			319,
			999681
		],
		[
			320,
			999680
		],
		[
			321,
			999679
		],
		[
			322,
			999678
		],
		[
			323,
			999677
		],
		[
			324,
			999676
		],
		[
			325,
			999675
		],
		[
			326,
			999674
		],
		[
			327,
			999673
		],
		[
			328,
			999672
		],
		[
			329,
			999671
		],
		[
			330,
			999670
		],
		[
			331,
			999669
		],
		[
			332,
			999668
		],
		[
			333,
			999667
		],
		[
			334,
			999666
		],
		[
			335,
			999665
		],
		[
			336,
			999664
		],
		[
			337,
			999663
		],
		[
			338,
			999662
		],
		[
			339,
			999661
		],
		[
			340,
			999660
		],
		[
			341,
			999659
		],
		[
			342,
			999658
		],
		[
			343,
			999657
		],
		[
			344,
			999656
		],
		[
			345,
			999655
		],
		[
			346,
			999654
		],
		[
			347,
			999653
		],
		[
			348,
			999652
		],
		[
			349,
			999651
		],
		[
			350,
			999650
		],
		[
			351,
			999649
		],
		[
			352,
			999648
		],
		[
			353,
			999647
		],
		[
			354,
			999646
		],
		[
			355,
			999645
		],
		[
			356,
			999644
		],
		[
			357,
			999643
		],
		[
			358,
			999642
		],
		[
			359,
			999641
		],
		[
			360,
			999640
		],
		[
			361,
			999639
		],
		[
			362,
			999638
		],
		[
			363,
			999637
		],
		[
			364,
			999636
		],
		[
			365,
			999635
		],
		[
			366,
			999634
		],
		[
			367,
			999633
		],
		[
			368,
			999632
		],
		[
			369,
			999631
		],
		[
			370,
			999630
		],
		[
			371,
			999629
		],
		[
			372,
			999628
		],
		[
			373,
			999627
		],
		[
			374,
			999626
		],
		[
			375,
			999625
		],
		[
			376,
			999624
		],
		[
			377,
			999623
		],
		[
			378,
			999622
		],
		[
			379,
			999621
		],
		[
			380,
			999620
		],
		[
			381,
			999619
		],
		[
			382,
			999618
		],
		[
			383,
			999617
		],
		[
			384,
			999616
		],
		[
			385,
			999615
		],
		[
			386,
			999614
		],
		[
			387,
			999613
		],
		[
			388,
			999612
		],
		[
			389,
			999611
		],
		[
			390,
			999610
		],
		[
			391,
			999609
		],
		[
			392,
			999608
		],
		[
			393,
			999607
		],
		[
			394,
			999606
		],
		[
			395,
			999605
		],
		[
			396,
			999604
		],
		[
			397,
			999603
		],
		[
			398,
			999602
		],
		[
			399,
			999601
		],
		[
			400,
			999600
		],
		[
			401,
			999599
		],
		[
			402,
			999598
		],
		[
			403,
			999597
		],
		[
			404,
			999596
		],
		[
			405,
			999595
		],
		[
			406,
			999594
		],
		[
			407,
			999593
		],
		[
			408,
			999592
		],
		[
			409,
			999591
		],
		[
			410,
			999590
		],
		[
			411,
			999589
		],
		[
			412,
			999588
		],
		[
			413,
			999587
		],
		[
			414,
			999586
		],
		[
			415,
			999585
		],
		[
			416,
			999584
		],
		[
			417,
			999583
		],
		[
			418,
			999582
		],
		[
			419,
			999581
		],
		[
			420,
			999580
		],
		[
			421,
			999579
		],
		[
			422,
			999578
		],
		[
			423,
			999577
		],
		[
			424,
			999576
		],
		[
			425,
			999575
		],
		[
			426,
			999574
		],
		[
			427,
			999573
		],
		[
			428,
			999572
		],
		[
			429,
			999571
		],
		[
			430,
			999570
		],
		[
			431,
			999569
		],
		[
			432,
			999568
		],
		[
			433,
			999567
		],
		[
			434,
			999566
		],
		[
			435,
			999565
		],
		[
			436,
			999564
		],
		[
			437,
			999563
		],
		[
			438,
			999562
		],
		[
			439,
			999561
		],
		[
			440,
			999560
		],
		[
			441,
			999559
		],
		[
			442,
			999558
		],
		[
			443,
			999557
		],
		[
			444,
			999556
		],
		[
			445,
			999555
		],
		[
			446,
			999554
		],
		[
			447,
			999553
		],
		[
			448,
			999552
		],
		[
			449,
			999551
		],
		[
			450,
			999550
		],
		[
			451,
			999549
		],
		[
			452,
			999548
		],
		[
			453,
			999547
		],
		[
			454,
			999546
		],
		[
			455,
			999545
		],
		[
			456,
			999544
		],
		[
			457,
			999543
		],
		[
			458,
			999542
		],
		[
			459,
			999541
		],
		[
			460,
			999540
		],
		[
			461,
			999539
		],
		[
			462,
			999538
		],
		[
			463,
			999537
		],
		[
			464,
			999536
		],
		[
			465,
			999535
		],
		[
			466,
			999534
		],
		[
			467,
			999533
		],
		[
			468,
			999532
		],
		[
			469,
			999531
		],
		[
			470,
			999530
		],
		[
			471,
			999529
		],
		[
			472,
			999528
		],
		[
			473,
			999527
		],
		[
			474,
			999526
		],
		[
			475,
			999525
		],
		[
			476,
			999524
		],
		[
			477,
			999523
		],
		[
			478,
			999522
		],
		[
			479,
			999521
		],
		[
			480,
			999520
		],
		[
			481,
			999519
		],
		[
			482,
			999518
		],
		[
			483,
			999517
		],
		[
			484,
			999516
		],
		[
			485,
			999515
		],
		[
			486,
			999514
		],
		[
			487,
			999513
		],
		[
			488,
			999512
		],
		[
			489,
			999511
		],
		[
			490,
			999510
		],
		[
			491,
			999509
		],
		[
			492,
			999508
		],
		[
			493,
			999507
		],
		[
			494,
			999506
		],
		[
			495,
			999505
		],
		[
			496,
			999504
		],
		[
			497,
			999503
		],
		[
			498,
			999502
		],
		[
			499,
			999501
		],
		[
			500,
			999500
		],
		[
			501,
			999499
		],
		[
			502,
			999498
		],
		[
			503,
			999497
		],
		[
			504,
			999496
		],
		[
			505,
			999495
		],
		[
			506,
			999494
		],
		[
			507,
			999493
		],
		[
			508,
			999492
		],
		[
			509,
			999491
		],
		[
			510,
			999490
		],
		[
			511,
			999489
		],
		[
			512,
			999488
		],
		[
			513,
			999487
		],
		[
			514,
			999486
		],
		[
			515,
			999485
		],
		[
			516,
			999484
		],
		[
			517,
			999483
		],
		[
			518,
			999482
		],
		[
			519,
			999481
		],
		[
			520,
			999480
		],
		[
			521,
			999479
		],
		[
			522,
			999478
		],
		[
			523,
			999477
		],
		[
			524,
			999476
		],
		[
			525,
			999475
		],
		[
			526,
			999474
		],
		[
			527,
			999473
		],
		[
			528,
			999472
		],
		[
			529,
			999471
		],
		[
			530,
			999470
		],
		[
			531,
			999469
		],
		[
			532,
			999468
		],
		[
			533,
			999467
		],
		[
			534,
			999466
		],
		[
			535,
			999465
		],
		[
			536,
			999464
		],
		[
			537,
			999463
		],
		[
			538,
			999462
		],
		[
			539,
			999461
		],
		[
			540,
			999460
		],
		[
			541,
			999459
		],
		[
			542,
			999458
		],
		[
			543,
			999457
		],
		[
			544,
			999456
		],
		[
			545,
			999455
		],
		[
			546,
			999454
		],
		[
			547,
			999453
		],
		[
			548,
			999452
		],
		[
			549,
			999451
		],
		[
			550,
			999450
		],
		[
			551,
			999449
		],
		[
			552,
			999448
		],
		[
			553,
			999447
		],
		[
			554,
			999446
		],
		[
			555,
			999445
		],
		[
			556,
			999444
		],
		[
			557,
			999443
		],
		[
			558,
			999442
		],
		[
			559,
			999441
		],
		[
			560,
			999440
		],
		[
			561,
			999439
		],
		[
			562,
			999438
		],
		[
			563,
			999437
		],
		[
			564,
			999436
		],
		[
			565,
			999435
		],
		[
			566,
			999434
		],
		[
			567,
			999433
		],
		[
			568,
			999432
		],
		[
			569,
			999431
		],
		[
			570,
			999430
		],
		[
			571,
			999429
		],
		[
			572,
			999428
		],
		[
			573,
			999427
		],
		[
			574,
			999426
		],
		[
			575,
			999425
		],
		[
			576,
			999424
		],
		[
			577,
			999423
		],
		[
			578,
			999422
		],
		[
			579,
			999421
		],
		[
			580,
			999420
		],
		[
			581,
			999419
		],
		[
			582,
			999418
		],
		[
			583,
			999417
		],
		[
			584,
			999416
		],
		[
			585,
			999415
		],
		[
			586,
			999414
		],
		[
			587,
			999413
		],
		[
			588,
			999412
		],
		[
			589,
			999411
		],
		[
			590,
			999410
		],
		[
			591,
			999409
		],
		[
			592,
			999408
		],
		[
			593,
			999407
		],
		[
			594,
			999406
		],
		[
			595,
			999405
		],
		[
			596,
			999404
		],
		[
			597,
			999403
		],
		[
			598,
			999402
		],
		[
			599,
			999401
		],
		[
			600,
			999400
		],
		[
			601,
			999399
		],
		[
			602,
			999398
		],
		[
			603,
			999397
		],
		[
			604,
			999396
		],
		[
			605,
			999395
		],
		[
			606,
			999394
		],
		[
			607,
			999393
		],
		[
			608,
			999392
		],
		[
			609,
			999391
		],
		[
			610,
			999390
		],
		[
			611,
			999389
		],
		[
			612,
			999388
		],
		[
			613,
			999387
		],
		[
			614,
			999386
		],
		[
			615,
			999385
		],
		[
			616,
			999384
		],
		[
			617,
			999383
		],
		[
			618,
			999382
		],
		[
			619,
			999381
		],
		[
			620,
			999380
		],
		[
			621,
			999379
		],
		[
			622,
			999378
		],
		[
			623,
			999377
		],
		[
			624,
			999376
		],
		[
			625,
			999375
		],
		[
			626,
			999374
		],
		[
			627,
			999373
		],
		[
			628,
			999372
		],
		[
			629,
			999371
		],
		[
			630,
			999370
		],
		[
			631,
			999369
		],
		[
			632,
			999368
		],
		[
			633,
			999367
		],
		[
			634,
			999366
		],
		[
			635,
			999365
		],
		[
			636,
			999364
		],
		[
			637,
			999363
		],
		[
			638,
			999362
		],
		[
			639,
			999361
		],
		[
			640,
			999360
		],
		[
			641,
			999359
		],
		[
			642,
			999358
		],
		[
			643,
			999357
		],
		[
			644,
			999356
		],
		[
			645,
			999355
		],
		[
			646,
			999354
		],
		[
			647,
			999353
		],
		[
			648,
			999352
		],
		[
			649,
			999351
		],
		[
			650,
			999350
		],
		[
			651,
			999349
		],
		[
			652,
			999348
		],
		[
			653,
			999347
		],
		[
			654,
			999346
		],
		[
			655,
			999345
		],
		[
			656,
			999344
		],
		[
			657,
			999343
		],
		[
			658,
			999342
		],
		[
			659,
			999341
		],
		[
			660,
			999340
		],
		[
			661,
			999339
		],
		[
			662,
			999338
		],
		[
			663,
			999337
		],
		[
			664,
			999336
		],
		[
			665,
			999335
		],
		[
			666,
			999334
		],
		[
			667,
			999333
		],
		[
			668,
			999332
		],
		[
			669,
			999331
		],
		[
			670,
			999330
		],
		[
			671,
			999329
		],
		[
			672,
			999328
		],
		[
			673,
			999327
		],
		[
			674,
			999326
		],
		[
			675,
			999325
		],
		[
			676,
			999324
		],
		[
			677,
			999323
		],
		[
			678,
			999322
		],
		[
			679,
			999321
		],
		[
			680,
			999320
		],
		[
			681,
			999319
		],
		[
			682,
			999318
		],
		[
			683,
			999317
		],
		[
			684,
			999316
		],
		[
			685,
			999315
		],
		[
			686,
			999314
		],
		[
			687,
			999313
		],
		[
			688,
			999312
		],
		[
			689,
			999311
		],
		[
			690,
			999310
		],
		[
			691,
			999309
		],
		[
			692,
			999308
		],
		[
			693,
			999307
		],
		[
			694,
			999306
		],
		[
			695,
			999305
		],
		[
			696,
			999304
		],
		[
			697,
			999303
		],
		[
			698,
			999302
		],
		[
			699,
			999301
		],
		[
			700,
			999300
		],
		[
			701,
			999299
		],
		[
			702,
			999298
		],
		[
			703,
			999297
		],
		[
			704,
			999296
		],
		[
			705,
			999295
		],
		[
			706,
			999294
		],
		[
			707,
			999293
		],
		[
			708,
			999292
		],
		[
			709,
			999291
		],
		[
			710,
			999290
		],
		[
			711,
			999289
		],
		[
			712,
			999288
		],
		[
			713,
			999287
		],
		[
			714,
			999286
		],
		[
			715,
			999285
		],
		[
			716,
			999284
		],
		[
			717,
			999283
		],
		[
			718,
			999282
		],
		[
			719,
			999281
		],
		[
			720,
			999280
		],
		[
			721,
			999279
		],
		[
			722,
			999278
		],
		[
			723,
			999277
		],
		[
			724,
			999276
		],
		[
			725,
			999275
		],
		[
			726,
			999274
		],
		[
			727,
			999273
		],
		[
			728,
			999272
		],
		[
			729,
			999271
		],
		[
			730,
			999270
		],
		[
			731,
			999269
		],
		[
			732,
			999268
		],
		[
			733,
			999267
		],
		[
			734,
			999266
		],
		[
			735,
			999265
		],
		[
			736,
			999264
		],
		[
			737,
			999263
		],
		[
			738,
			999262
		],
		[
			739,
			999261
		],
		[
			740,
			999260
		],
		[
			741,
			999259
		],
		[
			742,
			999258
		],
		[
			743,
			999257
		],
		[
			744,
			999256
		],
		[
			745,
			999255
		],
		[
			746,
			999254
		],
		[
			747,
			999253
		],
		[
			748,
			999252
		],
		[
			749,
			999251
		],
		[
			750,
			999250
		],
		[
			751,
			999249
		],
		[
			752,
			999248
		],
		[
			753,
			999247
		],
		[
			754,
			999246
		],
		[
			755,
			999245
		],
		[
			756,
			999244
		],
		[
			757,
			999243
		],
		[
			758,
			999242
		],
		[
			759,
			999241
		],
		[
			760,
			999240
		],
		[
			761,
			999239
		],
		[
			762,
			999238
		],
		[
			763,
			999237
		],
		[
			764,
			999236
		],
		[
			765,
			999235
		],
		[
			766,
			999234
		],
		[
			767,
			999233
		],
		[
			768,
			999232
		],
		[
			769,
			999231
		],
		[
			770,
			999230
		],
		[
			771,
			999229
		],
		[
			772,
			999228
		],
		[
			773,
			999227
		],
		[
			774,
			999226
		],
		[
			775,
			999225
		],
		[
			776,
			999224
		],
		[
			777,
			999223
		],
		[
			778,
			999222
		],
		[
			779,
			999221
		],
		[
			780,
			999220
		],
		[
			781,
			999219
		],
		[
			782,
			999218
		],
		[
			783,
			999217
		],
		[
			784,
			999216
		],
		[
			785,
			999215
		],
		[
			786,
			999214
		],
		[
			787,
			999213
		],
		[
			788,
			999212
		],
		[
			789,
			999211
		],
		[
			790,
			999210
		],
		[
			791,
			999209
		],
		[
			792,
			999208
		],
		[
			793,
			999207
		],
		[
			794,
			999206
		],
		[
			795,
			999205
		],
		[
			796,
			999204
		],
		[
			797,
			999203
		],
		[
			798,
			999202
		],
		[
			799,
			999201
		],
		[
			800,
			999200
		],
		[
			801,
			999199
		],
		[
			802,
			999198
		],
		[
			803,
			999197
		],
		[
			804,
			999196
		],
		[
			805,
			999195
		],
		[
			806,
			999194
		],
		[
			807,
			999193
		],
		[
			808,
			999192
		],
		[
			809,
			999191
		],
		[
			810,
			999190
		],
		[
			811,
			999189
		],
		[
			812,
			999188
		],
		[
			813,
			999187
		],
		[
			814,
			999186
		],
		[
			815,
			999185
		],
		[
			816,
			999184
		],
		[
			817,
			999183
		],
		[
			818,
			999182
		],
		[
			819,
			999181
		],
		[
			820,
			999180
		],
		[
			821,
			999179
		],
		[
			822,
			999178
		],
		[
			823,
			999177
		],
		[
			824,
			999176
		],
		[
			825,
			999175
		],
		[
			826,
			999174
		],
		[
			827,
			999173
		],
		[
			828,
			999172
		],
		[
			829,
			999171
		],
		[
			830,
			999170
		],
		[
			831,
			999169
		],
		[
			832,
			999168
		],
		[
			833,
			999167
		],
		[
			834,
			999166
		],
		[
			835,
			999165
		],
		[
			836,
			999164
		],
		[
			837,
			999163
		],
		[
			838,
			999162
		],
		[
			839,
			999161
		],
		[
			840,
			999160
		],
		[
			841,
			999159
		],
		[
			842,
			999158
		],
		[
			843,
			999157
		],
		[
			844,
			999156
		],
		[
			845,
			999155
		],
		[
			846,
			999154
		],
		[
			847,
			999153
		],
		[
			848,
			999152
		],
		[
			849,
			999151
		],
		[
			850,
			999150
		],
		[
			851,
			999149
		],
		[
			852,
			999148
		],
		[
			853,
			999147
		],
		[
			854,
			999146
		],
		[
			855,
			999145
		],
		[
			856,
			999144
		],
		[
			857,
			999143
		],
		[
			858,
			999142
		],
		[
			859,
			999141
		],
		[
			860,
			999140
		],
		[
			861,
			999139
		],
		[
			862,
			999138
		],
		[
			863,
			999137
		],
		[
			864,
			999136
		],
		[
			865,
			999135
		],
		[
			866,
			999134
		],
		[
			867,
			999133
		],
		[
			868,
			999132
		],
		[
			869,
			999131
		],
		[
			870,
			999130
		],
		[
			871,
			999129
		],
		[
			872,
			999128
		],
		[
			873,
			999127
		],
		[
			874,
			999126
		],
		[
			875,
			999125
		],
		[
			876,
			999124
		],
		[
			877,
			999123
		],
		[
			878,
			999122
		],
		[
			879,
			999121
		],
		[
			880,
			999120
		],
		[
			881,
			999119
		],
		[
			882,
			999118
		],
		[
			883,
			999117
		],
		[
			884,
			999116
		],
		[
			885,
			999115
		],
		[
			886,
			999114
		],
		[
			887,
			999113
		],
		[
			888,
			999112
		],
		[
			889,
			999111
		],
		[
			890,
			999110
		],
		[
			891,
			999109
		],
		[
			892,
			999108
		],
		[
			893,
			999107
		],
		[
			894,
			999106
		],
		[
			895,
			999105
		],
		[
			896,
			999104
		],
		[
			897,
			999103
		],
		[
			898,
			999102
		],
		[
			899,
			999101
		],
		[
			900,
			999100
		],
		[
			901,
			999099
		],
		[
			902,
			999098
		],
		[
			903,
			999097
		],
		[
			904,
			999096
		],
		[
			905,
			999095
		],
		[
			906,
			999094
		],
		[
			907,
			999093
		],
		[
			908,
			999092
		],
		[
			909,
			999091
		],
		[
			910,
			999090
		],
		[
			911,
			999089
		],
		[
			912,
			999088
		],
		[
			913,
			999087
		],
		[
			914,
			999086
		],
		[
			915,
			999085
		],
		[
			916,
			999084
		],
		[
			917,
			999083
		],
		[
			918,
			999082
		],
		[
			919,
			999081
		],
		[
			920,
			999080
		],
		[
			921,
			999079
		],
		[
			922,
			999078
		],
		[
			923,
			999077
		],
		[
			924,
			999076
		],
		[
			925,
			999075
		],
		[
			926,
			999074
		],
		[
			927,
			999073
		],
		[
			928,
			999072
		],
		[
			929,
			999071
		],
		[
			930,
			999070
		],
		[
			931,
			999069
		],
		[
			932,
			999068
		],
		[
			933,
			999067
		],
		[
			934,
			999066
		],
		[
			935,
			999065
		],
		[
			936,
			999064
		],
		[
			937,
			999063
		],
		[
			938,
			999062
		],
		[
			939,
			999061
		],
		[
			940,
			999060
		],
		[
			941,
			999059
		],
		[
			942,
			999058
		],
		[
			943,
			999057
		],
		[
			944,
			999056
		],
		[
			945,
			999055
		],
		[
			946,
			999054
		],
		[
			947,
			999053
		],
		[
			948,
			999052
		],
		[
			949,
			999051
		],
		[
			950,
			999050
		],
		[
			951,
			999049
		],
		[
			952,
			999048
		],
		[
			953,
			999047
		],
		[
			954,
			999046
		],
		[
			955,
			999045
		],
		[
			956,
			999044
		],
		[
			957,
			999043
		],
		[
			958,
			999042
		],
		[
			959,
			999041
		],
		[
			960,
			999040
		],
		[
			961,
			999039
		],
		[
			962,
			999038
		],
		[
			963,
			999037
		],
		[
			964,
			999036
		],
		[
			965,
			999035
		],
		[
			966,
			999034
		],
		[
			967,
			999033
		],
		[
			968,
			999032
		],
		[
			969,
			999031
		],
		[
			970,
			999030
		],
		[
			971,
			999029
		],
		[
			972,
			999028
		],
		[
			973,
			999027
		],
		[
			974,
			999026
		],
		[
			975,
			999025
		],
		[
			976,
			999024
		],
		[
			977,
			999023
		],
		[
			978,
			999022
		],
		[
			979,
			999021
		],
		[
			980,
			999020
		],
		[
			981,
			999019
		],
		[
			982,
			999018
		],
		[
			983,
			999017
		],
		[
			984,
			999016
		],
		[
			985,
			999015
		],
		[
			986,
			999014
		],
		[
			987,
			999013
		],
		[
			988,
			999012
		],
		[
			989,
			999011
		],
		[
			990,
			999010
		],
		[
			991,
			999009
		],
		[
			992,
			999008
		],
		[
			993,
			999007
		],
		[
			994,
			999006
		],
		[
			995,
			999005
		],
		[
			996,
			999004
		],
		[
			997,
			999003
		],
		[
			998,
			999002
		],
		[
			999,
			999001
		],
		[
			1000,
			999000
		]
	])).toBe(999)
},1000)
