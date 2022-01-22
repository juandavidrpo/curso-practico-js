//cuadrado
function perimetroCuadrado(lado) {
  return lado * 4
}

function areaCuadrado(lado) {
  return lado * lado
}

//triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}

//Circulo

const pi = Math.PI

function diametroCirculo(radio) {
  return radio * 2
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * pi
}

function areaCirculo(radio) {
  return (radio * radio) * pi
}


//interaccion con HTML
//cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = input.value

  const perimetro = perimetroCuadrado(value)
  document.getElementById("resultadoCuadrado").innerHTML = perimetro + "cm"
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado")
  const value = input.value

  const area = areaCuadrado(value)
  document.getElementById("resultadoCuadrado").innerHTML = area + "cm²"
}

//triangulo

function calcularPerimetroTriangulo() {
  const input = document.getElementById("lado1Triangulo")
  const value = Number(input.value)
  const input1 = document.getElementById("lado2Triangulo")
  const value1 = Number(input1.value)
  const base = document.getElementById("baseTriangulo")
  const value2 = Number(base.value)

  const perimetro = perimetroTriangulo(value, value1, value2)

  if (value == 0 || value1 == 0 || value2 == 0) {
    alert('Recuerda ingresar valores en "Lado A", Lado B" y "Base"')
  } else {
    document.getElementById("resultadoTriangulo").innerHTML = perimetro + "cm"
  }
}

function calcularAreaTriangulo() {
  const base = document.getElementById("baseTriangulo")
  const value = base.value
  const altura = document.getElementById("alturaTriangulo")
  const value1 = altura.value

  const area = areaTriangulo(value, value1)

  if (value == 0 || value1 == 0) {
    alert('Recuerda ingresar valores en "Base" y "Altura"')
  } else {
    document.getElementById("resultadoTriangulo").innerHTML = area + "cm"
  }
}

//circulo

function calcularDiametroCirculo() {
  let input = document.getElementById("radioCirculo")
  let value = input.value

  let diametro = diametroCirculo(value)
  document.getElementById("resultadoCirculo").innerHTML = diametro + "cm"
}

function calcularPerimetroCirculo() {
  let input = document.getElementById("radioCirculo")
  let value = input.value
  
  let perimetro = perimetroCirculo(value)
  document.getElementById("resultadoCirculo").innerHTML = perimetro + "cm"
}

function calcularAreaCirculo() {
  let input = document.getElementById("radioCirculo")
  let value = input.value

  let area = areaCirculo(value)
  document.getElementById("resultadoCirculo").innerHTML = area + "cm²"
}


//triangulo isoceles

function alturaTriangulo (trianguloGLadoA, trianguloGLadoB, trianguloGBase) {
  if (trianguloGLadoA != trianguloGLadoB) {
    console.error("los lados A y B no son iguales")
  } else {
    let trianguloPLadoB = trianguloGBase / 2
    let trianguloPBase = trianguloGLadoA
    let trianguloPLadoBCuadrado = trianguloPLadoB * trianguloPLadoB
    let trianguloPBaseCuadrado = trianguloPBase * trianguloPBase
    let trianguloPLadoA = Math.sqrt(trianguloPBaseCuadrado - trianguloPLadoBCuadrado)
    let trianguloGAltura = trianguloPLadoA

    return trianguloGAltura
  }
}