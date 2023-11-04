import PropTypes from 'prop-types'
function Item(props) {
    return (
      <li>
        {props.marca} - {props.ano_lancamento}
      </li>
    )
  }
  export default Item

  Item.propTypes = {//propriedade do componente importa com letra maiuscula e chama com letra minuscula(validação a mivel de programação)
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
  }
  
  Item.defaultProps = {//no caso de nao ter declarado ela manda no deafult
    marca: 'Faltou a marca',
    ano_lancamento: 'Faltou o ano de laçamento',
  }