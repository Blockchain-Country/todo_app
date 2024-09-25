import styles from './Button.module.css'

function Button(props) {
  const { onClick, title, children, disabled = false } = props

  return (
    <button
      {...props}
      //   onClick={onClick}
      //   title={title}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button
