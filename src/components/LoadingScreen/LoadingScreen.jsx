import styles from './LoadingScreen.module.css'

const LoadingScreen = ({loader: isLoading}) => {
  if (isLoading === true) {
    return (
      <div 
        className={
          `${styles.component}
          position-absolute z-2
          d-flex flex-column 
          align-items-center justify-content-center`
        }>
        <h1 className={`${styles.title} fw-semibold`}>
          Carregando...
        </h1>
        <p className={`${styles.paragraph} fs-4`}>
          Por favor, aguarde um instante.
        </p>
      </div>
    );
  }

  return null;
}
LoadingScreen.propTypes = {
  loader: Boolean.isRequired
}

export default LoadingScreen