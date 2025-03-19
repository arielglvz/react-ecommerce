const FormattedPrice = ({ amount }: { amount?:  number}) => {
  const formattedAmount = new Number(amount).toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  })
  return <span>{formattedAmount}</span>
}

export default FormattedPrice
