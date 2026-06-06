# The Physics Championship: Round 3 Olympiad Theory Handbook
**20 Advanced Derivations and Proofs**  
*Organized by the Physics Research Council*  
*Contact: physicsresearchcouncil@gmail.com*

---

## Problem 1: Classical Mechanics (Oscillations of Liquid in a U-Tube)
A liquid of mass density rho and total length L is placed inside a uniform vertical U-tube of cross-sectional area A. If the liquid is displaced slightly from its equilibrium position and released, prove that it executes simple harmonic motion and derive its oscillation frequency.

### Proof:
Let the liquid column be displaced by a distance x from its equilibrium height. This displacement causes the liquid level in one arm of the U-tube to rise by x and the level in the other arm to drop by x. 
The difference in heights between the two columns of liquid is 2x.

The restoring force F is the weight of this excess height of the liquid column:
$$F = - (2x \cdot A \cdot \rho) \cdot g$$
where A is the cross-sectional area and g is the acceleration due to gravity.

Applying Newton's Second Law to the entire mass of the liquid, M = L * A * rho:
$$M \cdot \frac{d^2 x}{d t^2} = F$$
$$(L \cdot A \cdot \rho) \cdot \frac{d^2 x}{d t^2} = - 2 \cdot A \cdot \rho \cdot g \cdot x$$

Divide both sides by A * rho:
$$L \cdot \frac{d^2 x}{d t^2} = - 2 \cdot g \cdot x$$
$$\frac{d^2 x}{d t^2} + \left(\frac{2g}{L}\right) x = 0$$

This is the standard equation for a simple harmonic oscillator, d^2(x)/dt^2 + (omega^2)*x = 0.
The oscillation frequency is:
$$\omega = \sqrt{\frac{2g}{L}}$$

---

## Problem 2: Classical Mechanics (Escape Velocity of a Variable Density Planet)
A planet of radius R has a radially symmetric mass density profile given by rho(r) = rho_0 * (1 - r/R), where r is the distance from the center. Derive the escape velocity for an object of mass m from the surface of this planet.

### Proof:
First, we find the total mass M of the planet by integrating the density profile over the volume:
$$M = \int_0^R \rho(r) \cdot 4\pi r^2 \cdot dr = 4\pi \rho_0 \int_0^R \left(r^2 - \frac{r^3}{R}\right) dr$$
$$M = 4\pi \rho_0 \left[ \frac{r^3}{3} - \frac{r^4}{4R} \right]_0^R = 4\pi \rho_0 \left( \frac{R^3}{3} - \frac{R^3}{4} \right) = 4\pi \rho_0 \left( \frac{R^3}{12} \right) = \frac{\pi \rho_0 R^3}{3}$$

To escape to infinity, the initial kinetic energy of the object on the surface plus the gravitational potential energy must sum to at least zero:
$$\frac{1}{2} m v_e^2 - \frac{G M m}{R} = 0 \implies v_e = \sqrt{\frac{2GM}{R}}$$

Substituting the expression for M:
$$v_e = \sqrt{\frac{2G (\pi \rho_0 R^3 / 3)}{R}} = \sqrt{\frac{2}{3} \pi G \rho_0 R^2}$$

---

## Problem 3: Classical Mechanics (Double Pendulum Lagrangian)
A double pendulum consists of two identical bobs of mass m suspended by two light, rigid strings of length L. The first pendulum is attached to a fixed ceiling, and the second is attached to the first bob. Derive the Lagrangian of this system in terms of the angular coordinates theta_1 and theta_2.

### Proof:
Let the origin (0,0) be the pivot at the ceiling. The coordinates of the first bob (x1, y1) are:
$$x_1 = L \sin\theta_1, \quad y_1 = -L \cos\theta_1$$
The coordinates of the second bob (x2, y2) are:
$$x_2 = L \sin\theta_1 + L \sin\theta_2, \quad y_2 = -L \cos\theta_1 - L \cos\theta_2$$

Differentiating with respect to time:
$$\dot{x}_1 = L \dot{\theta}_1 \cos\theta_1, \quad \dot{y}_1 = L \dot{\theta}_1 \sin\theta_1$$
$$\dot{x}_2 = L \dot{\theta}_1 \cos\theta_1 + L \dot{\theta}_2 \cos\theta_2, \quad \dot{y}_2 = L \dot{\theta}_1 \sin\theta_1 + L \dot{\theta}_2 \sin\theta_2$$

The velocities squared are:
$$v_1^2 = \dot{x}_1^2 + \dot{y}_1^2 = L^2 \dot{\theta}_1^2$$
$$v_2^2 = L^2 \dot{\theta}_1^2 + L^2 \dot{\theta}_2^2 + 2L^2 \dot{\theta}_1 \dot{\theta}_2 (\cos\theta_1\cos\theta_2 + \sin\theta_1\sin\theta_2) = L^2 [\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2)]$$

The kinetic energy T is:
$$T = \frac{1}{2} m v_1^2 + \frac{1}{2} m v_2^2 = \frac{1}{2} m L^2 [2\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2)]$$

The potential energy U, choosing the ceiling as zero reference, is:
$$U = m g y_1 + m g y_2 = -m g L (2\cos\theta_1 + \cos\theta_2)$$

The Lagrangian L = T - U is:
$$L = \frac{1}{2} m L^2 [2\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2)] + m g L (2\cos\theta_1 + \cos\theta_2)$$

---

## Problem 4: Classical Mechanics (Normal Force on a Rolling Cylinder inside a Sphere)
A cylinder of mass m and radius r rolls without slipping inside a larger hollow cylinder of radius R. Derive the normal force exerted by the wall on the rolling cylinder as a function of the angular position theta, assuming it starts from rest at the top horizontal position (theta = 90 degrees).

### Proof:
Let theta be measured from the bottom vertical axis. The cylinder is released from theta_0 = pi/2.
Using conservation of energy, the mechanical energy at position theta is equal to the initial energy:
$$E = m g (R-r) \sin\theta_0 = m g (R-r)$$
At position theta, the energy is:
$$E = \frac{3}{4} m (R-r)^2 \dot{\theta}^2 + m g (R-r) \cos\theta$$

Equating the energy equations:
$$m g (R-r) = \frac{3}{4} m (R-r)^2 \dot{\theta}^2 + m g (R-r) \cos\theta$$
$$g (1 - \cos\theta) = \frac{3}{4} (R-r) \dot{\theta}^2 \implies (R-r) \dot{\theta}^2 = \frac{4}{3} g (1 - \cos\theta)$$

The forces acting along the radial direction are the normal force N pointing inward, and the radial component of gravity pointing outward, m * g * cos(theta).
The radial equation of motion is:
$$N - m g \cos\theta = m \frac{v_{\text{cm}}^2}{R-r} = m (R-r) \dot{\theta}^2$$

Substitute the expression for (R-r)*dot(theta)^2:
$$N - m g \cos\theta = m \left( \frac{4}{3} g (1 - \cos\theta) \right)$$
$$N = \frac{4}{3} m g - \frac{1}{3} m g \cos\theta = \frac{1}{3} m g (4 - \cos\theta)$$

---

## Problem 5: Classical Mechanics (Sliding Wedge on a Frictionless Table)
A wedge of mass M with a frictionless inclined surface of angle alpha rests on a horizontal frictionless table. A block of mass m is placed on the wedge. Derive the acceleration of the wedge as the block slides down.

### Proof:
Let X be the coordinate of the wedge on the horizontal table, and x be the coordinate of the block relative to the wedge along the incline.
The coordinates of the block are:
$$x_b = X + x \cos\alpha, \quad y_b = -x \sin\alpha$$
Differentiating with respect to time:
$$\dot{x}_b = \dot{X} + \dot{x} \cos\alpha, \quad \dot{y}_b = -\dot{x} \sin\alpha$$

The kinetic energy of the system is:
$$T = \frac{1}{2} M \dot{X}^2 + \frac{1}{2} m [ (\dot{X} + \dot{x}\cos\alpha)^2 + (-\dot{x}\sin\alpha)^2 ] = \frac{1}{2} (M + m) \dot{X}^2 + \frac{1}{2} m \dot{x}^2 + m \dot{X} \dot{x} \cos\alpha$$
The potential energy is:
$$U = -m g x \sin\alpha$$

The Lagrangian L = T - U is:
$$L = \frac{1}{2} (M + m) \dot{X}^2 + \frac{1}{2} m \dot{x}^2 + m \dot{X} \dot{x} \cos\alpha + m g x \sin\alpha$$

Since X is a cyclic coordinate (L does not depend on X), the momentum conjugate to X is conserved:
$$\frac{\partial L}{\partial \dot{X}} = (M + m) \dot{X} + m \dot{x} \cos\alpha = P_X = 0 \quad (\text{starting from rest})$$
$$\dot{X} = - \frac{m \cos\alpha}{M + m} \dot{x}$$

Apply the Euler-Lagrange equation for x:
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) - \frac{\partial L}{\partial x} = 0 \implies m \ddot{x} + m \ddot{X} \cos\alpha - m g \sin\alpha = 0$$
$$\ddot{x} + \ddot{X} \cos\alpha = g \sin\alpha$$

Substitute the derivative of the momentum relation, d(dot X)/dt:
$$\ddot{x} + \left( - \frac{m \cos\alpha}{M + m} \ddot{x} \right) \cos\alpha = g \sin\alpha$$
$$\ddot{x} \left( 1 - \frac{m \cos^2\alpha}{M + m} \right) = g \sin\alpha \implies \ddot{x} = \frac{g \sin\alpha}{1 - \frac{m \cos^2\alpha}{M + m}}$$

Using the relation for the wedge acceleration A = d^2(X)/dt^2:
$$A = - \frac{m g \sin\alpha \cos\alpha}{(M + m) - m \cos^2\alpha} = - \frac{m g \sin\alpha \cos\alpha}{M + m \sin^2\alpha}$$

---

## Problem 6: Electrodynamics (Magnetic Field of a Rotating Charged Sphere)
A thin hollow sphere of radius R carries a uniform surface charge density sigma. The sphere rotates about a vertical axis through its center with a constant angular velocity omega. Prove that the magnetic field at the center of the sphere is B = (2/3) * mu_0 * sigma * R * omega.

### Proof:
Consider a thin ring on the sphere at angle theta from the axis of rotation, with width R*d(theta).
The charge dq on this ring is:
$$dq = \sigma \cdot 2\pi(R \sin\theta) \cdot (R d\theta) = 2\pi R^2 \sigma \sin\theta d\theta$$

Since the sphere rotates with frequency f = omega / (2*pi), the current dI generated by this moving charge ring is:
$$dI = dq \cdot \frac{\omega}{2\pi} = R^2 \sigma \omega \sin\theta d\theta$$

The magnetic field dB at the center of the sphere due to this circular current loop of radius r = R*sin(theta) is:
$$dB = \frac{\mu_0 dI r^2}{2 (r^2 + z^2)^{3/2}} = \frac{\mu_0 dI (R\sin\theta)^2}{2 R^3} = \frac{\mu_0 (R^2 \sigma \omega \sin\theta d\theta) R^2 \sin^2\theta}{2 R^3} = \frac{\mu_0 \sigma R \omega \sin^3\theta d\theta}{2}$$

Integrate dB from theta = 0 to pi:
$$B = \frac{\mu_0 \sigma R \omega}{2} \int_0^\pi \sin^3\theta d\theta$$
Using the integration identity:
$$\int_0^\pi \sin^3\theta d\theta = \left[ -\cos\theta + \frac{\cos^3\theta}{3} \right]_0^\pi = \left( 1 - \frac{1}{3} \right) - \left( -1 + \frac{-1}{3} \right) = \frac{2}{3} + \frac{2}{3} = \frac{4}{3}$$
$$B = \frac{\mu_0 \sigma R \omega}{2} \cdot \frac{4}{3} = \frac{2}{3} \mu_0 \sigma R \omega$$

---

## Problem 7: Electrodynamics (LC Parallel Circuit Oscillations)
Two identical capacitors of capacitance C are connected in parallel, with a switch separating them. One capacitor is initially charged to a potential V_0, and the other is uncharged. The circuit is closed through an inductor of inductance L. Derive the current through the inductor as a function of time.

### Proof:
Let q1(t) be the charge on the first capacitor, and q2(t) be the charge on the second.
The current through the inductor is:
$$I = \dot{q}_2 = -\dot{q}_1$$

Applying Kirchhoff's Loop Rule:
$$\frac{q_1}{C} - L \frac{dI}{dt} - \frac{q_2}{C} = 0 \implies \frac{q_1 - q_2}{C} - L \ddot{q}_2 = 0$$

Since total charge Q = q1 + q2 = C * V_0 is conserved:
$$q_1 = C V_0 - q_2$$
Substitute this expression:
$$\frac{C V_0 - 2q_2}{C} - L \ddot{q}_2 = 0 \implies \ddot{q}_2 + \frac{2}{LC} q_2 = \frac{V_0}{L}$$

The homogeneous solution has angular frequency omega = sqrt(2 / (L*C)).
Solving with initial conditions q2(0) = 0 and I(0) = 0:
$$q_2(t) = \frac{C V_0}{2} (1 - \cos(\omega t))$$
Differentiating with respect to time to find current:
$$I(t) = \dot{q}_2(t) = \frac{C V_0 \omega}{2} \sin(\omega t) = \frac{V_0}{2} \sqrt{\frac{2C}{L}} \sin\left(\sqrt{\frac{2}{LC}} t\right) = V_0 \sqrt{\frac{C}{2L}} \sin\left(\sqrt{\frac{2}{LC}} t\right)$$

---

## Problem 8: Electrodynamics (Self-Inductance of a Coaxial Cable)
A coaxial cable consists of an inner solid cylindrical conductor of radius a and a thin outer cylindrical shell of radius b. A constant current I flows along the inner conductor and returns along the outer shell. Derive the self-inductance per unit length of the cable, considering only the magnetic energy stored between the conductors.

### Proof:
Using Ampere's Law for a radius r where a < r < b, the magnetic field is:
$$B(r) = \frac{\mu_0 I}{2\pi r}$$

The magnetic energy density u_B stored in the magnetic field is:
$$u_B = \frac{B^2}{2\mu_0} = \frac{1}{2\mu_0} \left( \frac{\mu_0 I}{2\pi r} \right)^2 = \frac{\mu_0 I^2}{8\pi^2 r^2}$$

To find the total energy U per unit length (L = 1), we integrate the energy density over the cylindrical volume shell between a and b:
$$U = \int_a^b u_B \cdot 2\pi r \cdot dr = \int_a^b \frac{\mu_0 I^2}{8\pi^2 r^2} \cdot 2\pi r \cdot dr = \frac{\mu_0 I^2}{4\pi} \int_a^b \frac{1}{r} dr = \frac{\mu_0 I^2}{4\pi} \ln\left(\frac{b}{a}\right)$$

The self-inductance per unit length L_ind satisfies the relation:
$$U = \frac{1}{2} L_{\text{ind}} I^2$$
Equating these equations:
$$\frac{1}{2} L_{\text{ind}} I^2 = \frac{\mu_0 I^2}{4\pi} \ln\left(\frac{b}{a}\right) \implies L_{\text{ind}} = \frac{\mu_0}{2\pi} \ln\left(\frac{b}{a}\right)$$

---

## Problem 9: Electrodynamics (Force Between Two Moving Charges)
Two point charges, each of charge q, move parallel to each other along the x-axis with a constant velocity v. The distance between them along the y-axis is d. Derive the ratio of the magnetic force F_M to the electrostatic force F_E between them.

### Proof:
The electrostatic force F_E between the charges is given by Coulomb's law:
$$F_E = \frac{q^2}{4\pi \epsilon_0 d^2}$$

The magnetic field B created by the first moving charge at the position of the second is given by the Biot-Savart law for a moving charge:
$$B = \frac{\mu_0}{4\pi} \frac{q (\vec{v} \times \vec{r})}{r^3} \implies B = \frac{\mu_0 q v}{4\pi d^2}$$

The magnetic Lorentz force F_M acting on the second charge is:
$$F_M = q (\vec{v} \times \vec{B}) = q v B = q v \left( \frac{\mu_0 q v}{4\pi d^2} \right) = \frac{\mu_0 q^2 v^2}{4\pi d^2}$$

The ratio of the magnetic force to the electrostatic force is:
$$\frac{F_M}{F_E} = \frac{\frac{\mu_0 q^2 v^2}{4\pi d^2}}{\frac{q^2}{4\pi \epsilon_0 d^2}} = \mu_0 \epsilon_0 v^2$$
Since c = 1 / sqrt(mu_0 * epsilon_0), we have mu_0 * epsilon_0 = 1 / c^2.
$$\frac{F_M}{F_E} = \frac{v^2}{c^2}$$

---

## Problem 10: Electrodynamics (Drift Velocity Derivation)
A conductor of cross-sectional area A and electron density n carries a current I. Derive the relationship between the current and the average drift velocity v_d of the free electrons.

### Proof:
Consider a segment of the conductor of length dx. The volume of this segment is dV = A * dx.
The total number of free electrons in this volume is:
$$dN = n \cdot dV = n \cdot A \cdot dx$$

The total charge dq of these electrons is:
$$dq = e \cdot dN = e \cdot n \cdot A \cdot dx$$

The current I is the rate at which charge passes through the cross-section:
$$I = \frac{dq}{dt} = e \cdot n \cdot A \cdot \frac{dx}{dt}$$
Since the average rate of movement of the charges is the drift velocity v_d = dx/dt:
$$I = n e A v_d$$

---

## Problem 11: Thermodynamics (Efficiency of a Stirling Cycle)
A Stirling engine uses an ideal gas and operates on a cycle consisting of two isothermal steps at temperatures T_H and T_C, and two isochoric steps at volumes V_1 and V_2. Derive the efficiency of this engine, assuming perfect heat regeneration between the isochoric stages.

### Proof:
During the isothermal expansion at T_H, the heat absorbed by the gas is:
$$Q_{\text{in}} = W_{\text{isothermal}} = n R T_H \ln\left(\frac{V_2}{V_1}\right)$$

During the isothermal compression at T_C, the heat rejected by the gas is:
$$Q_{\text{out}} = n R T_C \ln\left(\frac{V_2}{V_1}\right)$$

In an engine with perfect regeneration, the heat required to raise the temperature during the isochoric heating step is exactly equal to the heat recovered during the isochoric cooling step. Thus, no net heat is exchanged with external reservoirs during the isochoric phases.

The efficiency is:
$$\eta = \frac{Q_{\text{in}} - Q_{\text{out}}}{Q_{\text{in}}} = \frac{n R T_H \ln(V_2/V_1) - n R T_C \ln(V_2/V_1)}{n R T_H \ln(V_2/V_1)}$$
$$\eta = \frac{T_H - T_C}{T_H} = 1 - \frac{T_C}{T_H}$$

---

## Problem 12: Thermodynamics (Entropy Change in Gas Mixing)
Two identical chambers of volume V are separated by a partition. One chamber contains n moles of an ideal gas at temperature T, and the other chamber contains n moles of a different ideal gas at the same temperature T. If the partition is removed and the gases mix isothermally, derive the total change in entropy of the system.

### Proof:
Since the two gases are different, the mixing process is irreversible.
Each gas expands from its initial volume V to a final total volume of 2V.
The entropy change for an isothermal expansion of n moles of an ideal gas is:
$$\Delta S_{\text{gas}} = n R \ln\left(\frac{V_f}{V_i}\right) = n R \ln\left(\frac{2V}{V}\right) = n R \ln 2$$

Since both gases expand independently:
$$\Delta S_{\text{total}} = \Delta S_1 + \Delta S_2 = n R \ln 2 + n R \ln 2 = 2 n R \ln 2$$

---

## Problem 13: Thermodynamics (Partition Function of a Two-State System)
A system consists of N independent particles, each of which can occupy one of two energy states: a ground state of energy 0 and an excited state of energy E. Derive the partition function Z for a single particle, and find the average energy of the system at temperature T.

### Proof:
The single-particle partition function Z is the sum over the Boltzmann factors for all states:
$$Z = \sum_i e^{-E_i / (k T)} = e^0 + e^{-E / (k T)} = 1 + e^{-\beta E}$$
where beta = 1 / (k * T).

The average energy U of a single particle is:
$$U = -\frac{\partial \ln Z}{\partial \beta} = -\frac{1}{Z} \frac{\partial Z}{\partial \beta}$$
$$\frac{\partial Z}{\partial \beta} = -E e^{-\beta E}$$
$$U = \frac{E e^{-\beta E}}{1 + e^{-\beta E}} = \frac{E}{e^{\beta E} + 1}$$

For N independent particles, the total average energy is:
$$U_{\text{total}} = N U = \frac{N E}{e^{E / (k T)} + 1}$$

---

## Problem 14: Thermodynamics (Joule-Thomson Coefficient Derivation)
Prove that the Joule-Thomson expansion coefficient, mu_JT = (dT/dP)_H, is zero for an ideal gas.

### Proof:
The Joule-Thomson coefficient is defined for an isenthalpic process (constant enthalpy H):
$$\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H$$

Using the cyclic relation for partial derivatives:
$$\left(\frac{\partial T}{\partial P}\right)_H \left(\frac{\partial P}{\partial H}\right)_T \left(\frac{\partial H}{\partial T}\right)_P = -1 \implies \left(\frac{\partial T}{\partial P}\right)_H = -\frac{(\partial H / \partial P)_T}{(\partial H / \partial T)_P}$$
The denominator is the heat capacity at constant pressure, C_p = (\partial H / \partial T)_P.

Using the thermodynamic relation for dH:
$$dH = T dS + V dP$$
Taking the partial derivative with respect to P at constant T:
$$\left(\frac{\partial H}{\partial P}\right)_T = T \left(\frac{\partial S}{\partial P}\right)_T + V$$
Applying the Maxwell relation (\partial S / \partial P)_T = -(\partial V / \partial T)_P:
$$\left(\frac{\partial H}{\partial P}\right)_T = V - T \left(\frac{\partial V}{\partial T}\right)_P$$

For an ideal gas, V = n*R*T/P, so:
$$\left(\frac{\partial V}{\partial T}\right)_P = \frac{n R}{P} = \frac{V}{T}$$
Substitute this into the expression:
$$\left(\frac{\partial H}{\partial P}\right)_T = V - T \left(\frac{V}{T}\right) = V - V = 0$$
$$\mu_{JT} = -\frac{0}{C_p} = 0$$

---

## Problem 15: Waves & Optics (Thin Film Interference at Oblique Incidence)
A thin film of refractive index n and thickness d is surrounded by air. Monochromatic light of wavelength lambda is incident on the film at an angle theta. Derive the condition for constructive interference of the reflected light.

### Proof:
The path difference between the wave reflected from the top surface and the wave reflected from the bottom surface is:
$$\Delta p = 2 n d \cos\theta_r$$
where theta_r is the angle of refraction inside the film.

By Snell's Law, sin(theta) = n * sin(theta_r), which gives:
$$\cos\theta_r = \sqrt{1 - \sin^2\theta_r} = \sqrt{1 - \frac{\sin^2\theta}{n^2}}$$

Since the reflection at the top surface (air to film, n > 1) undergoes a phase shift of pi (half-wavelength shift) and the reflection at the bottom surface (film to air) does not, the effective path difference for constructive interference must satisfy:
$$\Delta p = \left(m + \frac{1}{2}\right) \lambda \quad (\text{for } m = 0, 1, 2...)$$
$$2 n d \cos\theta_r = \left(m + \frac{1}{2}\right) \lambda$$
$$2 d \sqrt{n^2 - \sin^2\theta} = \left(m + \frac{1}{2}\right) \lambda$$

---

## Problem 16: Waves & Optics (Resolving Power of a Grating)
Prove that the chromatic resolving power of a diffraction grating with N lines in the m-th order is R = lambda / d(lambda) = m * N.

### Proof:
The condition for the principal maximum of order m is:
$$d \sin\theta = m \lambda$$

The angular width of the principal maximum is determined by the position of the adjacent minimum:
$$d \sin(\theta + \Delta\theta) = m \lambda + \frac{\lambda}{N}$$
Using the small angle approximation for Delta theta:
$$d \cos\theta \Delta\theta = \frac{\lambda}{N} \implies \Delta\theta = \frac{\lambda}{N d \cos\theta}$$

If a nearby wavelength lambda + d(lambda) is resolved, its principal maximum must lie at least at the position of this first minimum (Rayleigh's criterion):
$$\theta(\lambda + d\lambda) - \theta(\lambda) \ge \Delta\theta$$
$$\frac{d\theta}{d\lambda} d\lambda \ge \frac{\lambda}{N d \cos\theta}$$

Differentiating the grating equation with respect to lambda:
$$d \cos\theta \frac{d\theta}{d\lambda} = m \implies \frac{d\theta}{d\lambda} = \frac{m}{d \cos\theta}$$
Substitute this derivative into the inequality:
$$\left( \frac{m}{d \cos\theta} \right) d\lambda \ge \frac{\lambda}{N d \cos\theta} \implies m d\lambda \ge \frac{\lambda}{N}$$
$$\frac{\lambda}{d\lambda} = m N$$

---

## Problem 17: Special Relativity (Relativistic Doppler Effect)
A light source moves directly away from a stationary observer with a constant velocity v. Derive the relationship between the emitted frequency f_0 and the observed frequency f.

### Proof:
Let the source emit wave crests at intervals of proper period T_0 = 1 / f_0.
Due to time dilation, the period between emissions in the observer's frame is:
$$T_e = \gamma T_0 = \frac{T_0}{\sqrt{1 - v^2/c^2}}$$

During the interval T_e, the source travels a distance d = v * T_e away from the observer.
The time it takes for the second crest to travel this additional distance to the observer is:
$$\Delta t = \frac{d}{c} = \frac{v T_e}{c}$$

The total period T between the arrival of successive wave crests at the observer is:
$$T = T_e + \Delta t = T_e \left(1 + \frac{v}{c}\right) = \gamma T_0 \left(1 + \frac{v}{c}\right)$$
$$T = \frac{T_0 (1 + v/c)}{\sqrt{(1 - v/c)(1 + v/c)}} = T_0 \sqrt{\frac{1 + v/c}{1 - v/c}}$$

Since frequency is the reciprocal of the period:
$$f = f_0 \sqrt{\frac{1 - v/c}{1 + v/c}}$$

---

## Problem 18: Special Relativity (Threshold Energy for Pion Production)
A moving proton of mass m collides with a stationary proton. The collision produces a neutral pion of mass m_pi (p + p -> p + p + pi^0). Derive the minimum kinetic energy K_th of the incident proton required to allow this process.

### Proof:
Let p1 and p2 be the four-momenta of the incident and target protons.
$$p_1 = \left( \frac{E}{c}, \vec{p} \right), \quad p_2 = (m c, \vec{0})$$
The total four-momentum of the system is p = p1 + p2.
Using the relativistic invariant s = p^2 * c^2:
$$s = (p_1 + p_2)^2 c^2 = p_1^2 c^2 + p_2^2 c^2 + 2 p_1 \cdot p_2 c^2 = m^2 c^4 + m^2 c^4 + 2 E m c^2 = 2 m^2 c^4 + 2 E m c^2$$

At the threshold energy, all products (two protons and one pion) are created at rest relative to each other in the center of mass frame. The invariant s at threshold is:
$$s_{\text{th}} = (2m + m_\pi)^2 c^4$$

Equating the two expressions for the invariant:
$$2 m^2 c^4 + 2 E m c^2 = (2m + m_\pi)^2 c^4 = 4 m^2 c^4 + m_\pi^2 c^4 + 4 m m_\pi c^4$$
$$2 E m c^2 = 2 m^2 c^4 + m_\pi^2 c^4 + 4 m m_\pi c^4 \implies E = m c^2 + 2 m_\pi c^2 + \frac{m_\pi^2 c^2}{2m}$$

Since the total energy of the incident proton is E = m*c^2 + K_th:
$$m c^2 + K_{\text{th}} = m c^2 + 2 m_\pi c^2 + \frac{m_\pi^2 c^2}{2m}$$
$$K_{\text{th}} = 2 m_\pi c^2 \left( 1 + \frac{m_\pi}{4m} \right)$$

---

## Problem 19: Modern Physics (Bohr-Sommerfeld Quantization of Harmonic Oscillator)
Use the Bohr-Sommerfeld quantization rule, oint p * dq = n * h, to derive the permitted energy levels of a one-dimensional classical harmonic oscillator of mass m and angular frequency omega.

### Proof:
The phase space path of a harmonic oscillator is defined by constant energy E:
$$E = \frac{p^2}{2m} + \frac{1}{2} m \omega^2 q^2 \implies \frac{q^2}{2E / (m\omega^2)} + \frac{p^2}{2mE} = 1$$

This is the equation of an ellipse in phase space coordinates (q, p) with semi-major axes:
$$a = \sqrt{\frac{2E}{m \omega^2}}, \quad b = \sqrt{2mE}$$

The action integral is the area of this ellipse in phase space:
$$\oint p dq = \text{Area} = \pi \cdot a \cdot b$$
$$\oint p dq = \pi \sqrt{\frac{2E}{m \omega^2}} \sqrt{2mE} = \pi \frac{2E}{\omega} = \frac{2\pi E}{\omega}$$

Applying the quantization condition:
$$\frac{2\pi E}{\omega} = n h \implies E = n \frac{h}{2\pi} \omega = n \hbar \omega$$

---

## Problem 20: Modern Physics (Normalization of Infinite Well Wavefunction)
A particle of mass m is confined to a one-dimensional infinite potential well of width L, stretching from x = 0 to x = L. Prove that the normalization constant for the wavefunctions psi_n(x) = A * sin(n * pi * x / L) is A = sqrt(2/L).

### Proof:
The normalization condition requires the total probability density integrated over space to equal 1:
$$\int_0^L |\psi_n(x)|^2 dx = 1 \implies A^2 \int_0^L \sin^2\left(\frac{n\pi x}{L}\right) dx = 1$$

Using the trigonometric identity sin^2(theta) = (1 - cos(2*theta)) / 2:
$$A^2 \int_0^L \frac{1 - \cos(2n\pi x / L)}{2} dx = 1$$
$$A^2 \left[ \frac{x}{2} - \frac{\sin(2n\pi x / L)}{4n\pi / L} \right]_0^L = 1$$
Evaluating at the boundaries:
$$A^2 \left( \frac{L}{2} - 0 \right) = 1 \implies A^2 \frac{L}{2} = 1$$
$$A^2 = \frac{2}{L} \implies A = \sqrt{\frac{2}{L}}$$
This confirms the normalization constant.
