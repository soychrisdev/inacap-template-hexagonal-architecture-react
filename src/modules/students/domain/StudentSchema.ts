import { z } from "zod"

export const studentModelSchema = z.object({
  id: z.string().optional(),
  nombre: z.string(),
  rut: z.string(),
  nacionalidad: z.string(),
  fechaNacimiento: z.string(),
  adad: z.string(),
  mail: z.string(),
  telefono: z.string(),
  contactoEmergencia: z.string(),
  tipoInstitucion: z.string(),
  sede: z.string(),
  jornada: z.string(),
  areasAcademicas: z.string(),
  programasDeEstudio: z.string(),
  tutor: z.string(),
  directorCarrera: z.string(),
  tipoDiscapacidad: z.string(),
  origenDiscapacidad: z.string(),
  etapa: z.string(),
  certificados: z.string(),
  enfermedadAsociada: z.string(),
  checkTratamientoFarmacologico: z.boolean(),
  tratamientoFarmacologicoDetalles: z.string(),
  checkTratamientoEspecialista: z.boolean(),
  tratamientoEspecialistaDetalles: z.string(),
  checkRedesApoyoPublicaPrivada: z.boolean(),
  redesApoyoPublicaPrivadaDetalles: z.string(),
  informacionFamiliar: z.array(
    z.object({
      nombre: z.string(),
      parentesco: z.string(),
      ocupacion: z.string(),
      edad: z.string()
    })
  ),
  modalidadEnsenanzaMedia: z.string(),
  establecimientoEducacional: z.string(),
  checkApoyoPosicoacademico: z.boolean(),
  apoyoPosicoacademicoDetalles: z.string(),
  checkRipitioCurso: z.boolean(),
  cursoRepetido: z.string(),
  motivoRepeticion: z.string(),
  checkAsistioOtraInstitucionEdSuperior: z.boolean(),
  nombreInstitucionSuperior: z.string(),
  tipoInstitucionSuperior: z.string(),
  nombreCarreraSuperior: z.string(),
  semestresAprobadosSuperior: z.string(),
  motivoAbandonoSuperior: z.string(),
  checkTrabaja: z.boolean(),
  nombreEmpresaTrabaja: z.string(),
  cargoEmpresaTrabaja: z.string(),
  descripcionCaracteristicasDelEstudiante: z.string(),
  descripcionAjustesRazonables: z.string(),
  checkConsentimientoAjustesRazonables: z.boolean(),
  observaciones: z.string(),
  adjuntos: z.string(),
  informacionConfidencial: z.string()
})


export type StudentModel = z.infer<typeof studentModelSchema>