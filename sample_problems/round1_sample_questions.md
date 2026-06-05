# The Physics Championship - Round 1: Conceptual Quiz (Sample Questions)

This document contains 10 sample questions representing the style and difficulty of **Round 1 (Conceptual Quiz Challenge)**. These questions test fundamental physical principles, analytical reasoning, and quick numerical estimations.

---

### Question 1: Kinematics (Conceptual)
A ball is thrown vertically upwards into the air. Neglecting air resistance, what are the ball's velocity ($v$) and acceleration ($a$) at the peak of its trajectory?
*   (A) $v = 0$, $a = 0$
*   (B) $v = 0$, $a = g$ downwards
*   (C) $v = 0$, $a = g$ upwards
*   (D) $v \neq 0$, $a = g$ downwards

**Correct Answer: (B)**  
**Solution:** At the highest point (peak) of the trajectory, the velocity momentarily drops to zero as the ball reverses direction. However, gravity is constantly acting on the ball throughout its flight. Therefore, the acceleration remains constant at $a = g \approx 9.8\text{ m/s}^2$ directed downwards. If acceleration were zero at the peak, the ball would remain suspended at the top and never fall back down.

---

### Question 2: Electromagnetism (Analytical)
A solid, uncharged conducting sphere of radius $R$ is placed in a uniform external electric field $\vec{E}_0$. What is the electric field inside the conducting sphere once electrostatic equilibrium is reached?
*   (A) $\vec{E} = \vec{E}_0$
*   (B) $\vec{E} = 0$
*   (C) $\vec{E} = -\vec{E}_0$
*   (D) $\vec{E} = 2\vec{E}_0$

**Correct Answer: (B)**  
**Solution:** In electrostatic equilibrium, free charges inside a conductor rearrange themselves on the outer surface to create an internal induced electric field that exactly opposes the external field. Thus, the net electric field inside any ideal conductor at equilibrium is strictly zero.

---

### Question 3: Thermodynamics (Conceptual)
An ideal gas undergoes an isothermal expansion (expansion at constant temperature). Which of the following statements is true regarding the change in internal energy ($\Delta U$) of the gas and the heat ($Q$) added to the system?
*   (A) $\Delta U > 0$, $Q = 0$
*   (B) $\Delta U = 0$, $Q < 0$
*   (C) $\Delta U = 0$, $Q > 0$
*   (D) $\Delta U < 0$, $Q = 0$

**Correct Answer: (C)**  
**Solution:** For an ideal gas, internal energy is a function of temperature only ($U \propto T$). Since the process is isothermal, $\Delta T = 0$, which implies $\Delta U = 0$. According to the First Law of Thermodynamics, $\Delta U = Q - W$. Since the gas expands, work $W$ is done *by* the gas ($W > 0$). Therefore, $0 = Q - W \implies Q = W > 0$, meaning heat must be added to the system to maintain a constant temperature during expansion.

---

### Question 4: Waves & Optics (Numerical)
A green laser pointer ($\lambda = 532\text{ nm}$ in air) is shone into a glass block with a refractive index of $n = 1.50$. What is the wavelength of the laser light inside the glass?
*   (A) $532\text{ nm}$
*   (B) $798\text{ nm}$
*   (C) $355\text{ nm}$
*   (D) $266\text{ nm}$

**Correct Answer: (C)**  
**Solution:** When light passes from one medium to another, its frequency ($f$) remains constant. Since the velocity of light in a medium is $v = c/n$ and $v = f\lambda$, the wavelength in the medium is scaled by the refractive index:
$$\lambda_n = \frac{\lambda_{\text{air}}}{n} = \frac{532\text{ nm}}{1.50} \approx 354.67\text{ nm}$$

---

### Question 5: Gravitation (Numerical)
Two spherical planets, Planet X and Planet Y, have the same average density. However, Planet X has twice the radius of Planet Y ($R_X = 2R_Y$). What is the ratio of the escape velocity from Planet X to that from Planet Y ($v_{e,X} / v_{e,Y}$)?
*   (A) $1:1$
*   (B) $2:1$
*   (C) $\sqrt{2}:1$
*   (D) $4:1$

**Correct Answer: (B)**  
**Solution:** The escape velocity is given by $v_e = \sqrt{\frac{2GM}{R}}$. Since density $\rho = \frac{M}{\frac{4}{3}\pi R^3}$ is constant, mass can be written as $M = \frac{4}{3}\pi R^3 \rho$. Substituting this into the escape velocity formula:
$$v_e = \sqrt{\frac{2G(\frac{4}{3}\pi R^3 \rho)}{R}} = R \sqrt{\frac{8}{3}\pi G \rho}$$
Since density $\rho$ is the same, escape velocity is directly proportional to the radius ($v_e \propto R$). Since $R_X = 2R_Y$, it follows that $v_{e,X} = 2v_{e,Y}$, giving a ratio of $2:1$.

---

### Question 6: Modern Physics (Conceptual)
According to the photoelectric effect experiments, if the frequency of incident light on a metal plate is below the threshold frequency ($\nu_0$):
*   (A) Electrons are emitted but have zero kinetic energy.
*   (B) Electrons are emitted only if the intensity of the light is sufficiently high.
*   (C) No electrons are emitted, regardless of the light's intensity.
*   (D) Electrons are emitted after a long time delay.

**Correct Answer: (C)**  
**Solution:** The photoelectric effect demonstrates that light is quantized into packets of energy (photons) where $E = h\nu$. Ejection of an electron requires a single photon to have enough energy to overcome the metal's work function ($\Phi = h\nu_0$). If $\nu < \nu_0$, individual photons do not have sufficient energy to eject an electron. Increasing the light intensity only increases the *number* of photons, not their individual energy, so still no electrons will be ejected.

---

### Question 7: Mechanics (Numerical)
A block of mass $m = 5\text{ kg}$ is resting on a rough horizontal surface with a coefficient of static friction $\mu_s = 0.4$. A horizontal force of $F = 15\text{ N}$ is applied to the block. What is the magnitude of the friction force acting on the block? (Take $g = 10\text{ m/s}^2$).
*   (A) $20\text{ N}$
*   (B) $15\text{ N}$
*   (C) $0\text{ N}$
*   (D) $5\text{ N}$

**Correct Answer: (B)**  
**Solution:** The maximum static friction force is:
$$f_{s,\text{max}} = \mu_s N = \mu_s mg = 0.4 \times (5\text{ kg} \times 10\text{ m/s}^2) = 20\text{ N}$$
The applied horizontal force is $F = 15\text{ N}$. Since $F < f_{s,\text{max}}$, the block does not move. For a stationary object, the static friction force must exactly equal the applied force to maintain equilibrium (net force = 0). Thus, the friction force is $15\text{ N}$.

---

### Question 8: Electromagnetism (Conceptual)
An inductor of inductance $L$ and a resistor of resistance $R$ are connected in series with a DC battery. When the switch is closed, the current rises toward its maximum value. The time constant ($\tau$) of this RL circuit represents the time it takes for the current to reach approximately what percentage of its maximum value?
*   (A) $50\%$
*   (B) $63.2\%$
*   (C) $90\%$
*   (D) $36.8\%$

**Correct Answer: (B)**  
**Solution:** The equation for the current rise in an RL circuit is $I(t) = I_{\text{max}}(1 - e^{-t/\tau})$, where $\tau = L/R$. At $t = \tau$:
$$I(\tau) = I_{\text{max}}(1 - e^{-1}) \approx I_{\text{max}}(1 - 0.368) = 0.632 I_{\text{max}}$$
This corresponds to approximately $63.2\%$ of the maximum current.

---

### Question 9: Thermodynamics (Numerical)
A heat engine operates between a hot reservoir at $T_H = 600\text{ K}$ and a cold reservoir at $T_C = 300\text{ K}$. What is the maximum theoretical efficiency ($\eta$) of this engine?
*   (A) $100\%$
*   (B) $75\%$
*   (C) $50\%$
*   (D) $25\%$

**Correct Answer: (C)**  
**Solution:** The maximum theoretical efficiency of a heat engine is the Carnot efficiency:
$$\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H} = 1 - \frac{300\text{ K}}{600\text{ K}} = 1 - 0.50 = 0.50 = 50\%$$

---

### Question 10: Modern Physics (Numerical)
What is the de Broglie wavelength of an electron moving with a momentum of $p = 1.32 \times 10^{-24}\text{ kg}\cdot\text{m/s}$? (Take Planck's constant $h = 6.6 \times 10^{-34}\text{ J}\cdot\text{s}$).
*   (A) $0.5\text{ nm}$
*   (B) $0.5\text{ pm}$
*   (C) $5.0\text{ nm}$
*   (D) $2.0\text{ nm}$

**Correct Answer: (A)**  
**Solution:** The de Broglie relation states:
$$\lambda = \frac{h}{p} = \frac{6.6 \times 10^{-34}\text{ J}\cdot\text{s}}{1.32 \times 10^{-24}\text{ kg}\cdot\text{m/s}} = 5 \times 10^{-10}\text{ m} = 0.5\text{ nm}$$
This wavelength falls in the X-ray region, illustrating the wave nature of electrons at the atomic scale.
