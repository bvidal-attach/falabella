# URLS

---

[Deposito Plazo Fijo](https://static.bancofalabella.pe/dap-web-component/dist-cdn/term-deposit.html)

### Regex para todas las paginas

```regex
(pu|pr)-depositoaplazoinversion-([A-Za-z0-9-.]+)-simulacion
```

---

### Complete registration

_Privada_

```javascript
const event = {
  event: 'gaEvent',
  eventCategory: 'op :: deposito a plazo inversion',
  eventLabel: '',
  eventAction: 'simular',
};
```

_Publica_

```regex
pu-depositoaplazoinversion-paso2-resultadosimulacion

pu-depositoaplazoinversion-([A-Za-z0-9]+)-resultadosimulacion
```

### Purchase

_Privada_

```regex
pr-depositoaplazoinversion-paso9-inversionrealizada

pr-depositoaplazoinversion-([A-Za-z0-9]+)-inversionrealizada
```

_Publica_

```
No existe
```

---

### Steps

#### Continuar - paso 1

```regex
pu-depositoaplazoinversion-paso1-simulacion
```

#### Solicitar - paso 2

```regex
pu-depositoaplazoinversion-paso2-resultadosimulacion
```
