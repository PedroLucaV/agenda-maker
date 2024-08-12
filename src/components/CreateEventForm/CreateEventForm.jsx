import styles from "./CreateEventForm.module.css"

const CreateEventForm = ({defDate}) => {
  return (
    <section className={
      `${styles.popup} 
      z-2 position-absolute
      d-flex flex-column
      rounded-3`
    }>
      <header className={`
        ${styles.heading} p-2 
        d-flex flex-row 
        align-items-center
        rounded-top-3`
      }>
        <img src="" alt="Ícone de Calendário" />
        <h1 className="fs-5 fw-semibold text-white">Criar Evento</h1>
      </header>

      <form 
        action=""
        className={`${styles.form} d-flex flex-column px-4`}
      >
        <div className="d-flex flex-column">
          <label htmlFor="inName">
            Nome do evento:
          </label>
          <input 
            type="text" 
            name="inName" 
            id="inName" 
            placeholder="Ex.: Aniversário da Empresa"
          />
        </div>
        
        <div className="d-flex flex-column">
          <label htmlFor="inDescription">
            Descrição do evento:
          </label>
          <input 
            type="text" 
            name="inDescription" 
            id="inDescription" 
            placeholder="Ex.: Aniversário da Empresa"
          />
        </div>
        
        <div className="d-flex flex-row">
          <div>
            <label htmlFor="inStartDate">Início:</label>
            <p>
              <input 
                type="date" 
                name="startDate" 
                id="inStartDate" 
                value={defDate}
              />
              <input
                className="mt-1 w-75"
                type="time" 
                name="startTime" 
                id="inStartTime" 
              />
            </p>
          </div>

          <div>
            <label htmlFor="inEndDate">Término:</label>
            <p>
              <input 
                type="date" 
                name="endDate" 
                id="inEndDate" 
                value={defDate}
              />
              <input 
                className="mt-1 w-75"
                type="time" 
                name="endTime" 
                id="inEndTime" 
              />
            </p>
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="inCategory">Categoria:</label>
            <select name="category" id="inCategory">
              <option value="A">Aula</option>
              <option value="E">Evento</option>
              <option value="P">Projeto Escolar</option>
              <option value="V">Visita</option>
              <option value="M">Manutenção</option>
            </select>
          </div>
        </div>

        <div className={`${styles.buttonWrapper} d-flex flex-row px-3`}>
        <input 
            type="submit" 
            value="Criar Evento"
            className="btn btn-success w-50"
          />
          <input 
            type="submit" 
            value="Cancelar Evento"
            className="btn btn-danger w-50"
          />
        </div>
      </form>
    </section>
  );
}
CreateEventForm.propTypes = {
  defDate: Date
}

export default CreateEventForm;