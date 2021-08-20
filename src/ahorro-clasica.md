# URLS

---

[Cuenta de Ahorro Clasica](https://www.bancofalabella.pe/onboarding/ahorro-clasica/)

### Regex para todas las paginas

```regex
pu-onboardingpasivos-([A-Za-z0-9-]+)-ahorro
```

#### Continuar - paso 1

```regex
pu-onboardingpasivos-paso1-iniciodatos-ahorro
```

#### Ya eres cliente

```regex
pu-onboardingpasivos-yacliente-ahorro
```

#### Solicitar - paso 2

```regex
pu-onboardingpasivos-paso2-inicio-ahorro
```

**Complete registration**

```javascript
const event = {
  event: 'gaEvent',
  eventCategory: 'op :: onb ahorro',
  eventLabel: 'continuar',
  eventAction: 'paso 2',
};
```

#### Continuar - paso 3

```regex
pu-onboardingpasivos-paso3-direccionprovincia-ahorro
```

#### Continuar - paso 3.1

```regex
pu-onboardingpasivos-paso3.1-datospersonales-ahorro
```

#### Continuar - paso 4

```regex
pu-onboardingpasivos-paso4-datospersonales-ahorro
```

#### Continuar - paso 5

```regex
pu-onboardingpasivos-paso5-datoslaborales-ahorro
```

#### Continuar - paso 6

No existe

#### Continuar - paso 7

```regex
pu-onboardingpasivos-paso7-nacionalidad-ahorro
```

#### Continuar - paso 8

```regex
pu-onboardingpasivos-paso8-marcas-ahorro
```

#### Continuar - paso 9

```regex
pu-onboardingpasivos-paso9-tipomoneda-ahorro
```

#### Continuar - paso 10

```regex
pu-onboardingpasivos-paso10-confirmacion-ahorro
```

#### Continuar - paso 11

```regex
pu-onboardingpasivos-validacionhuella-ahorro
```

#### Continuar - paso 12

```regex
pu-onboardingpasivos-creacionclave-ahorro
```

---
