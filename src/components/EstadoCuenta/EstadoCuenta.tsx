'use client'

import styles from './EstadoCuenta.module.css'

export default function EstadoCuenta() {
  const pagos = [
    {
      fechaPago: '06/11/2025',
      noPago: '#25',
      referencia: '',
      tipoPago: 'ENGANCHE',
      cargos: '3,088.00',
      abonos: '0.00'
    },
    {
      fechaPago: '06/11/2025',
      noPago: '99/80',
      referencia: 'V2025...',
      tipoPago: 'PAGO',
      cargos: '0.00',
      abonos: '1,089.00'
    }
  ]

  return (
    <div className={styles.glassContainer}>
      {/* Pestañas */}
      <div className={styles.tabs}>
        <div className={styles.tabActive}>Estados de cuenta</div>
        <div className={styles.tab}>Comentarios</div>
        <div className={styles.tab}>Servicios</div>
        <div className={styles.tab}>Facturas</div>
        <div className={styles.tab}>PA Beneficiarios</div>
      </div>

      {/* Tabla de pagos */}
      <div className={styles.pagosTable}>
        <div className={styles.tableHeader}>
          <div>Fecha de pago</div>
          <div>No. Pago</div>
          <div>Referencia</div>
          <div>Tipo de pago</div>
          <div>Cargos</div>
          <div>Abonos</div>
        </div>
        
        {pagos.map((pago, index) => (
          <div key={index} className={styles.tableRow}>
            <div>{pago.fechaPago}</div>
            <div>{pago.noPago}</div>
            <div>{pago.referencia}</div>
            <div>{pago.tipoPago}</div>
            <div>{pago.cargos}</div>
            <div>{pago.abonos}</div>
          </div>
        ))}
      </div>

      {/* Resumen de pagos */}
      <div className={styles.resumenPagos}>
        <div className={styles.resumenItem}>
          <div className={styles.resumenLabel}>IMPORTE A PAGAR</div>
          <div className={`${styles.resumenValue} ${styles.importePagar}`}>
            $21,993.00
          </div>
        </div>
        <div className={styles.resumenItem}>
          <div className={styles.resumenLabel}>IMPORTE PAGADO</div>
          <div className={`${styles.resumenValue} ${styles.importePagado}`}>
            $2,178.00
          </div>
        </div>
        <div className={styles.resumenItem}>
          <div className={styles.resumenLabel}>IMPORTE POR RECARGOS</div>
          <div className={`${styles.resumenValue} ${styles.importeRecargos}`}>
            $0.00
          </div>
        </div>
        <div className={styles.resumenItem}>
          <div className={styles.resumenLabel}>SALDO ACTUAL</div>
          <div className={`${styles.resumenValue} ${styles.saldoActual}`}>
            $19,815.00
          </div>
        </div>
      </div>

      {/* Datos adicionales */}
      <div className={styles.datosAdicionales}>
        <div className={styles.datosGrid}>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Fecha de corte:</span>
            <span className={styles.datoValue}>06/11/2025</span>
          </div>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Folio del título:</span>
            <span className={styles.datoValue}>-</span>
          </div>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Servicios proporcionados:</span>
            <span className={styles.datoValue}>2</span>
          </div>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Servicios restantes:</span>
            <span className={styles.datoValue}>2</span>
          </div>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Meses:</span>
            <span className={styles.datoValue}>24</span>
          </div>
          <div className={styles.datoItem}>
            <span className={styles.datoLabel}>Vendedor:</span>
            <span className={styles.datoValue}>125600 | OFICINA</span>
          </div>
        </div>
        
        <div className={styles.datoItem}>
          <span className={styles.datoLabel}>Descripción del servicio:</span>
          <span className={styles.datoValue}>Servicios, cremación o inhumación...</span>
        </div>
        
        <div className={styles.datoItem}>
          <span className={styles.datoLabel}>Forma de pago:</span>
          <span className={styles.datoValue}>Cargo automático</span>
        </div>
        
        <div className={styles.datoItem}>
          <span className={styles.datoLabel}>Empresa:</span>
          <span className={styles.datoValue}>FUNERALES URIBE</span>
        </div>

        <button className={styles.btnWord}>
          A WORD
        </button>
      </div>
    </div>
  )
}