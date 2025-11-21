'use client'

import styles from './DatosContrato.module.css'

export default function DatosContrato() {
  return (
    <div className={styles.glassContainer}>
      {/* Encabezado del contrato */}
      <div className={styles.header}>
        <div>
          <div className={styles.label}>CONTRATO</div>
          <div className={styles.contratoNumber}>33956</div>
        </div>
        <div>
          <div className={styles.label}>SOLICITUD</div>
          <div className={styles.solicitudNumber}>63015</div>
        </div>
      </div>

      {/* Datos personales */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>DATOS PERSONALES</div>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nombre</label>
            <input 
              type="text" 
              className={styles.input} 
              value="JUAN JOSE"
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Paterno</label>
            <input 
              type="text" 
              className={styles.input} 
              value="MUÑOZ"
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Materno</label>
            <input 
              type="text" 
              className={styles.input} 
              value="JURADO"
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>R.F.C.</label>
            <input 
              type="text" 
              className={styles.input} 
              value="MUJJ740818"
              readOnly
            />
          </div>
          <div className={styles.formGroupFull}>
            <label className={styles.label}>Email</label>
            <input 
              type="text" 
              className={styles.input} 
              value="italianoare742@gmail.com"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Domicilio */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>DOMICILIO</div>
        <div className={styles.formGrid}>
          <div className={styles.formGroupFull}>
            <label className={styles.label}>Dirección</label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Colonia, C.P., Municipio"
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Entre calle</label>
            <input 
              type="text" 
              className={styles.input} 
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Y calle</label>
            <input 
              type="text" 
              className={styles.input} 
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Datos específicos */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>DATOS ESPECÍFICOS</div>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Fecha nacimiento</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Edad</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Sexo</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nacionalidad</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Estado civil</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Ocupación</label>
            <input type="text" className={styles.input} readOnly />
          </div>
        </div>
      </div>

      {/* Teléfonos */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>TELÉFONOS</div>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Casa</label>
            <input type="text" className={styles.input} value="0" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Trabajo</label>
            <input type="text" className={styles.input} value="0" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Otro</label>
            <input 
              type="text" 
              className={styles.input} 
              value="5542261426"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Fechas del contrato */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>FECHAS DEL CONTRATO</div>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Elaboración</label>
            <input 
              type="text" 
              className={styles.input} 
              value="06/11/2025"
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Pago inicial</label>
            <input type="text" className={styles.input} readOnly />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>1er pago</label>
            <input 
              type="text" 
              className={styles.input} 
              value="06/12/2025"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Beneficiarios */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>BENEFICIARIOS</div>
        <div className={styles.beneficiariosList}>
          <div className={styles.beneficiarioItem}>
            MARIA SALOME GAMBOA RAMIREZ
          </div>
          <div className={styles.beneficiarioItem}>
            SAUL EDUARDO MUÑOZ GAMBOA
          </div>
        </div>
      </div>

      {/* Notas */}
      <div className={styles.notes}>
        <div>Contrato cancelado por NI.</div>
        <div>Recibos funeraria a clientes.</div>
      </div>
    </div>
  )
}