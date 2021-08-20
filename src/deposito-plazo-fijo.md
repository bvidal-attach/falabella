# URLS

---

[Deposito Plazo Fijo](https://static.bancofalabella.pe/dap-web-component/dist-cdn/term-deposit.html)

### Regex para todas las paginas

```regex
pu-depositoaplazoinversion-([A-Za-z0-9-.]+)simulacion
```

#### Continuar - paso 1

```regex
pu-depositoaplazoinversion-paso1-simulacion
```

#### Solicitar - paso 2

```regex
pu-depositoaplazoinversion-paso2-resultadosimulacion
```

**Complete registration**

```javascript
const event = {
  event: 'gaEvent',
  eventCategory: 'op :: deposito a plazo inversion',
  eventLabel: '',
  eventAction: 'simular',
};
```

---
