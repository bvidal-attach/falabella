# URLS

---

[Cuenta de Ahorro Banco Falabella](www.bancofalabella.pe/onboarding/ahorro-falabella/)

### Regex

```regex
(pu|pr)-onboardingpasivos-([A-Za-z0-9-.]+)-ahorrobf
```

---

### Complete registration

_Privada_

```
No existe
```

_Publica_

```regex
pu-onboardingpasivos-paso2-inicio-ahorrobf

pu-onboardingpasivos-([A-Za-z0-9-]+)ahorrobf
```

### Purchase

```regex
(pu|pr)-onboardingpasivos([A-Za-z0-9-]+)finalexitoso-ahorrobf
```

_Privada_

```regex
pr-onboardingpasivos-paso8-finalexitoso-ahorrobf

pr-onboardingpasivos-([A-Za-z0-9]+)-finalexitoso-ahorrobf($|\/)|pu-onboardingpasivos-creacionclave-ahorrobf($|\/)
```

_Publica_

```regex
pu-onboardingpasivos-creacionclave-ahorrobf

pr-onboardingpasivos-([A-Za-z0-9]+)-finalexitoso-ahorrobf($|\/)|pu-onboardingpasivos-creacionclave-ahorrobf($|\/)
```

---

#### Eventos

```javascript
const event = {
  event: 'gaEvent',
  eventCategory: 'op :: onb ahorro',
  eventLabel: 'continuar',
  eventAction: 'paso 2',
};
```

### Steps

#### Continuar - paso 1

```regex
pu-onboardingpasivos-paso1-iniciodatos-ahorrobf
```

#### Ya eres cliente

```regex
pu-onboardingpasivos-yacliente-ahorrobf
```

#### Solicitar - paso 2

```regex
pu-onboardingpasivos-paso2-inicio-ahorrobf
```

#### Continuar - paso 3

```regex
pu-onboardingpasivos-paso3-direccionprovincia-ahorrobf
```

#### Continuar - paso 3.1

```regex
pu-onboardingpasivos-paso3.1-datospersonales-ahorrobf
```

#### Continuar - paso 4

```regex
pu-onboardingpasivos-paso4-datospersonales-ahorrobf
```

#### Continuar - paso 5

```regex
pu-onboardingpasivos-paso5-datoslaborales-ahorrobf
```

#### Continuar - paso 6

No existe

#### Continuar - paso 7

```regex
pu-onboardingpasivos-paso7-nacionalidad-ahorrobf
```

#### Continuar - paso 8

```regex
pu-onboardingpasivos-paso8-marcas-ahorrobf
```

#### Continuar - paso 9

```regex
pu-onboardingpasivos-paso9-tipomoneda-ahorrobf
```

#### Continuar - paso 10

```regex
pu-onboardingpasivos-paso10-confirmacion-ahorrobf
```

#### Continuar - paso 11

```regex
pu-onboardingpasivos-validacionhuella-ahorrobf
```

#### Continuar - paso 12

```regex
pu-onboardingpasivos-creacionclave-ahorrobf
```

---