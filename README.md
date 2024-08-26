# AWS User Group Guatemala

Página web para la comunidad de AWS de Guatemala

## Requisitos
- [Hugo](https://gohugo.io/getting-started/quick-start/) versión 0.132.1
- Visual studio code o algún otro IDE. 

## Trabajar en local

### Clonar el repositorio
```
git clone https://github.com/awsugg/awsugg-website.git
```

### Ingresar al directorio clonado
```
cd awsugg-website
```

### Agregar el tema

**Opción 1**

```
# paso 1
git submodule add https://github.com/kkeles/awsug-hugo.git themes/awsug -f

# paso 2 (version  recomendada)
git submodule set-branch --branch v1.2.0 themes/awsug
```

**Opción 2**
```
git submodule init && git submodule update
```

### Versión del tema awsug
```
v1.2.0
```

### Cambiar la version del tema
```
git submodule set-branch --branch {version} themea/awsug

# e.g. v1.3.0
```

### Levantar el servicio usando el siguiente comando
```
hugo server
```

## Compilar para produccion
```
# Esto generará una versión estática de tu sitio en la carpeta public/ por defecto.
hugo
```