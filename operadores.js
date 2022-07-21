const peso1 = 1.0
const peso2 = Number('2.0')

const avaliacao1 = 1.871
const avaliacao2 = 2.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))

if (media <= 5)
{
  console.log("Você foi reprovado")
}
else if (media <= 7)
{
  console.log("Você está de recuperação")
}
else

{
  console.log("Aprovado com Sucesso")
}