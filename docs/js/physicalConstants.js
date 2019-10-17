var
  alpha = 0.00729927,          // fine structure constant
  k = 1.38064852e-23,          // boltzman constant (J/K)
  keV = 8.6173324e-5,          // boltzman constant (eV/K)
  Na = 6.022140857e23,         // avogadro constant (1/mol)
  RgasJ = 8.3144598,           // gas constant (J/(K mol))
  atm = 1.013e5,               // 1 atmosphere (N/m^2)
  bar = 1e5,                   // 1 bar (N/m^2)
  sigma = 5.670367e-8,         // stefan constant (W/(m^2 K^4))
  Ms = 1.98855e30,             // solar mass (kg)
  Ls = 3.828e26,               // solar luminosity (W)
  Rs = 6.957e8,                // solar radius (m)
  c = 2.99792458e8,            // speed of light (m/s)
  pi = 3.14159265359,          // pi
  h = 6.62607004e-34,          // planck constant (Js)
  heV = 4.135667662e-15,         // planck constant (eVs)
  hbar = 1.054571800e-34,      // reduced planck constant (Js)
  hbareV = 6.582119514e-16,    // reduced planck constant (eVs)
  hcJ = 1.98644568e-25,        // h*c (Jm)
  hceV = 1.23984193e-6,        // h*c (eVm)
  e = 1.60217662e-19,          // electron charge (C)
  eV = e,                      // electron volts/joule ()
  me = 9.10938356e-31,         // electron mass (kg)
  mp = 1.6726219e-27,          // proton mass (kg)
  eps0 = 8.854187817e-12,      // vacuum permittivity (F/m)
  Ggrav = 6.67408e-11;         // newton gravitational constant (N m^2 / kg^2)

/*
  Physical Constants
  Math.js includes the following physical constants. See Wikipedia for more information.

  Universal constants
  Name	Symbol	Value	Unit
  speedOfLight	c	299792458	m · s-1
  gravitationConstant	G	6.6738480e-11	m3 · kg-1 · s-2
  planckConstant	h	6.626069311e-34	J · s
  reducedPlanckConstant	h	1.05457172647e-34	J · s
  Electromagnetic constants
  Name	Symbol	Value	Unit
  magneticConstant	μ0	1.2566370614e-6	N · A-2
  electricConstant	ε0	8.854187817e-12	F · m-1
  vacuumImpedance	Z0	376.730313461	&ohm;
  coulomb	κ	8.9875517873681764e9	N · m2 · C-2
  elementaryCharge	e	1.60217656535e-19	C
  bohrMagneton	μB	9.2740096820e-24	J · T-1
  conductanceQuantum	G0	7.748091734625e-5	S
  inverseConductanceQuantum	G0-1	12906.403721742	&ohm;
  magneticFluxQuantum	f0	2.06783375846e-15	Wb
  nuclearMagneton	μN	5.0507835311e-27	J · T-1
  klitzing	RK	25812.807443484	&ohm;
  Atomic and nuclear constants
  Name	Symbol	Value	Unit
  bohrRadius	a0	5.291772109217e-11	m
  classicalElectronRadius	re	2.817940326727e-15	m
  electronMass	me	9.1093829140e-31	kg
  fermiCoupling	GF	1.1663645e-5	GeV-2
  fineStructure	α	7.297352569824e-3	-
  hartreeEnergy	Eh	4.3597443419e-18	J
  protonMass	mp	1.67262177774e-27	kg
  deuteronMass	md	3.3435830926e-27	kg
  neutronMass	mn	1.6749271613e-27	kg
  quantumOfCirculation	h / (2me)	3.636947552024e-4	m2 · s-1
  rydberg	R∞	10973731.56853955	m-1
  thomsonCrossSection	 	6.65245873413e-29	m2
  weakMixingAngle	 	0.222321	-
  efimovFactor	 	22.7	-
  Physico-chemical constants
  Name	Symbol	Value	Unit
  atomicMass	mu	1.66053892173e-27	kg
  avogadro	NA	6.0221412927e23	mol-1
  boltzmann	k	1.380648813e-23	J · K-1
  faraday	F	96485.336521	C · mol-1
  firstRadiation	c1	3.7417715317e-16	W · m2
  loschmidt	n0	2.686780524e25	m-3
  gasConstant	R	8.314462175	J · K-1 · mol-1
  molarPlanckConstant	NA · h	3.990312717628e-10	J · s · mol-1
  molarVolume	Vm	2.241396820e-10	m3 · mol-1
  sackurTetrode	 	-1.164870823	-
  secondRadiation	c2	1.438777013e-2	m · K
  stefanBoltzmann	σ	5.67037321e-8	W · m-2 · K-4
  wienDisplacement	b	2.897772126e-3	m · K
  Note that the values of loschmidt and molarVolume are at T = 273.15 K and p = 101.325 kPa. The value of sackurTetrode is at T = 1 K and p = 101.325 kPa.

  Adopted values
  Name	Symbol	Value	Unit
  molarMass	Mu	1e-3	kg · mol-1
  molarMassC12	M(12C)	1.2e-2	kg · mol-1
  gravity	gn	9.80665	m · s-2
  atm	atm	101325	Pa
  Natural units
  Name	Symbol	Value	Unit
  planckLength	lP	1.61619997e-35	m
  planckMass	mP	2.1765113e-8	kg
  planckTime	tP	5.3910632e-44	s
  planckCharge	qP	1.87554595641e-18	C
  planckTemperature	TP	1.41683385e+32	K
  */
