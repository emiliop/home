var accordionElement = [
    `<div class="card transparency-accordion"><div class="card-header" id="collapse-header`,
    `" data-toggle="collapse" data-target="#collapse`,
    `" aria-expanded="false" aria-controls="colapse>`,
    `"><h3 class="title mb-0">`,
    `<span class="arrow"></span></h3></div><div id="collapse`,
    `" class="collapse transparency-accordion-body" aria-labelledby="collapse-header`,
    `" data-parent="#accordion"> <div class="card-body">`,
    `</div></div></div>`

];

var sections = [
    {
        "name": "1. Mecanismos de contacto con el sujeto obligado",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "1.1. Sección particular",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Sección particular en la página de inicio del sitio web del sujeto obligado"
                    }
                ]
            },
            {
                "SsName": "1.2. Mecanismos para la atención al ciudadano",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Los espacios físicos destinados para el contacto con la entidad"
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Los teléfonos fijos y móviles, líneas gratuitas y fax, incluyendo el indicativo nacional e internacional en el formato (57+número del área respectiva)."
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Correo electrónico Institucional."
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Correo físico o postal"
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias"
                    }
                ]
            },
            {
                "SsName": "1.3. Localización física, sucursales o regiones, horarios y días de atención al publico",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Ubicación del sujeto obligado"
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Ubicación física de sedes, regionales, etc."
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Horarios y días de atención al público"
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Enlaces a los datos de contacto de las sucursales o regionales."
                    }
                ]
            },
            {
                "SsName": "1.4. Correo electrónico para notificaciones judiciales",
                "elements": [
                    {
                        "type": "link",
                        "url": "mailto:notificacionesjuridicas@ansv.gov.co",
                        "description": "notificacionesjuridicas@ansv.gov.co"
                    },
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Si realiza envíos a este correo, por favor evite enviar el documento físico. (Art. 197 de Código de Procedimiento Administrativo y de lo Contencioso Administrativo."
                    },
                    {
                        "type": "link",
                        "url": "mailto:notificacionesjuridicas@ansv.gov.co",
                        "description": "Buzón de Notificaciones Judiciales"
                    }
                ]
            },
            {
                "SsName": "1.5. Políticas de Seguridad de la información del sitio web y protección de datos personales",
                "elements": [
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/politicaunida.pdf",
                        "description": "Políticas de Seguridad de la información del sitio web"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Politicaparaeltratamientodedatospersonalespdf.pdf",
                        "description": "Protección de datos personales"
                    }
                ]
            }
        ]
    },
    {
        "name": "2. Información de Interés",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "2.1.Datos abiertos",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "En la sección del Observatorio Nacional de Seguridad Vial, la ANSV ha dispuesto a la ciudadanía datos abiertos para su consulta."
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Enlace Observatorio Nacional de Seguridad Vial"
                    }
                ]
            },
            {
                "SsName": "2.2.Estudios, investigaciones y otras publicaciones",
                "elements": [
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/MetodologiadeEvaluacionCriteriosResolucion718del2018pdf.pdf",
                        "description": "Guía metodológica Evaluación de instalación y operación de medios técnicos y tecnológicos de detección de infracciones de tránsito"
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Enlace Observatorio Nacional de Seguridad Vial"
                    }
                ]
            },
            {
                "SsName": "2.3.Convocatorias",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Para mas información de nuestras convocatorias dirijase a nuestra sección \"convocatorias\""
                    }
                ]
            },
            {
                "SsName": "2.4. Preguntas y respuestas frecuentes",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Preguntas y respuestas frecuentes"
                    }
                ]
            },
            {
                "SsName": "2.5. Glosario",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Glosario ANSV"
                    }
                ]
            },
            {
                "SsName": "2.7. Calendario de actividades",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Calendario de actividades ANSV"
                    }
                ]
            },
            {
                "SsName": "2.8. Información para niñas, niños y adolescentes",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Información para niñas, niños y adolescentes"
                    }
                ]
            },
            {
                "SsName": "2.9. Información adicional",
                "elements": [
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Enlace Observatorio Nacional de Seguridad Vial"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/RESOLUCION499DE12092019pdf.pdf",
                        "description": "Resolución 499 de 12 septiembre 2019 - Por la cual se realiza la convocatoria y establece el cronograma para la asignación de estímulos educativos vigencia 2019"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/resolucion032pdf.pdf",
                        "description": "Resolución 032 de 31 enero 2019 - Por la cual se deroga la resolución 329 de 2017 y se adopta el plan de incentivos de la ANSV para la vigencia 2019"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/AVISO_CONVOCATORIApdf.pdf",
                        "description": "Aviso convocatoria"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Resolucion528de2019pdf.pdf",
                        "description": "Resolución 528 de 2019 - Por la cual se declara desierta la convocatoria de estímulos educativos de la ANSV"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/CartadetratadignoANSVpdf.pdf",
                        "description": "Carta de trato digno ANSV"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/JCO_CODIGO_INTEGRIDAD_ANSV_Opdf.pdf",
                        "description": "Código Integridad ANSV"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Circular011de9mayo2017Lineamientopararesolverderechosdepeticionysolicitudesengeneralpdf.pdf",
                        "description": "Circular 011 de 9 mayo 2017 - Lineamiento para resolver derechos de petición y solicitudes en general"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Circular020de13diciembre2017Alcancealacircularnumero011de9demayode2017pdf.pdf",
                        "description": "Circular 020 de 13 diciembre 2017 - Alcance a la circular numero 011 de 9 de mayo de 2017"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Resolucion0243de6septiembrede2017SeadoptaelManualdeAtencionalCiudadanopdf.pdf",
                        "description": "Resolución 0243 de 6 septiembre de 2017 - Se adopta el Manual de Atención al Ciudadano"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/FormatoPQRSpdf.pdf",
                        "description": "Formato PQRS"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/CircularNo15de2deOctubrede2018pdf.pdf",
                        "description": "Circular No 15 de 02 de Octubre de 2018"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/RESOLUCIONENAJENACIONATITULOGRATUITODEBIENESMUEBLESpdf.pdf",
                        "description": "Resolución enajenación a título gratuito de bienes muebles"
                    },
                    {
                        "type": "title",
                        "url": "#",
                        "description": "Certificaciones ANSV"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/ISO9001ANSVpdf.pdf",
                        "description": "ISO 9001"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/ISO14001ANSVpdf.pdf",
                        "description": "ISO 14001"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/ISO18001ANSVpdf.pdf",
                        "description": "ISO 18001"
                    },
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Con el propósito de darle mayor transparencia al alto gobierno ante la ciudadanía en general, a continuación se publica la declaración de renta de la Directora General de la Agencia Nacional de Seguridad Vial."
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/Dec_Renta_Directorapdf.pdf",
                        "description": "Declaración de Renta - Directora General"
                    },
                    {
                        "type": "title",
                        "url": "#",
                        "description": "Convocatorias CNSC."
                    },
                    {
                        "type": "text",
                        "url": "",
                        "description": "La Agencia Nacional de Seguridad Vial ANSV se permite informar a la ciudadanía en general que en la actualidad no se adelanta procesos de convocatoria interna o a través de la Comisión Nacional de Servicio Civil para la provisión de cargos de carrera administrativa mediante concurso de méritos para garantizar la selección objetiva y la participación en igualdad de condiciones de los aspirantes."
                    },
                    {
                        "type": "text",
                        "url": "",
                        "description": "En el momento en que se inicie proceso de convocatoria se realizará conforme a lo establecido en la normativa vigente, esto es, a través de la Comisión Nacional del Servicio Civil y se dará a conocer a través de esta página."
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/RES369DE2019ACUERDOSINDICAL.pdf",
                        "description": "Acuerdo Sindical SINAVIAL - ANSV"
                    },
                    {
                        "type": "document",
                        "url": "https://ansv.gov.co/public/uploads/MATRIZCUMPLIMIENTOACUERDO2019.xlsx",
                        "description": "Matriz Cumplimiento Acuerdo 2019"
                    }
                ]
            }
        ]
    },
    {
        "name": "3. Estructura Orgánica y Talento Humano",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "4. Normatividad",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "5. Presupuesto",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "6. Planeación",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "7. Control",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "8. Contratación",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "9. Trámites y Servicios",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "10. Instrumentos de Gestión de información pública",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "11. Transparencia pasiva",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "12. Accesibilidad Web",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    },
    {
        "name": "13. Habeas Data",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Subsections": [
            {
                "SsName": "Lorem ipsum dolor sit amet",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "Sed ut perspiciatis unde omnis iste natus",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            },
            {
                "SsName": "At vero eos et accusamus et iusto",
                "elements": [
                    {
                        "type": "text",
                        "url": "#",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    },
                    {
                        "type": "link",
                        "url": "#",
                        "description": "Duis aute irure dolor in reprehenderit"
                    },
                    {
                        "type": "document",
                        "url": "#",
                        "description": "Sed ut perspiciatis unde omnis iste natus"
                    }
                ]
            }
            
        ]
    }

]

jQuery(document).ready(function() {
    console.log("ready! transp");
    openSection(0);
  })


function openSection(idOptionTarget) {
    //var container = $("#transparency-lvl3-container");
    //container.innerHTML = '';
    var elementToAdd = "<div class='transparency-section-container'><div class='transparency-section-title-container'><h2 class=\"transparency-section-title title-" + (idOptionTarget + 1) + "\">" + sections[idOptionTarget].name + "</h2></div>";
    elementToAdd = elementToAdd + "<div id=\"accordion\">";
    for (var i = 0; i < sections[idOptionTarget].Subsections.length; i++) {
        elementToAdd = elementToAdd + "" + accordionElement[0] + "" + i + "" + accordionElement[1] + "" + i + "" + accordionElement[2] + "" + i + "" + accordionElement[3];
        elementToAdd = elementToAdd + "" + sections[idOptionTarget].Subsections[i].SsName + "" + accordionElement[4] + i + accordionElement[5] + "" + i + "" + accordionElement[6];
        for (var j = 0; j < sections[idOptionTarget].Subsections[i].elements.length; j++) {
            elementToAdd = elementToAdd + "<div class=\"row transparency-singular-element\">" + getContentAccordion(idOptionTarget, i, j) + "</div>";
        }
        elementToAdd = elementToAdd + "" + accordionElement[7];
    }
    elementToAdd = elementToAdd + "</div></div>";
    //console.log(elementToAdd);
    jQuery("#transparency-lvl3-container").html(elementToAdd);
    //container.innerHTML(elementToAdd);
    jQuery('#transparency-lvl3-container .collapse-accordion').collapse();

}



function getContentAccordion(sectionLvl1, subsectionLvl2, sectionLvl3) {
    var stringToReturn = "";
    var type = sections[sectionLvl1].Subsections[subsectionLvl2].elements[sectionLvl3].type;
    var link = sections[sectionLvl1].Subsections[subsectionLvl2].elements[sectionLvl3].url;
    if (type == "link" || type == "document") {
        stringToReturn = "<div class=\"col-sm-4 d-flex justify-content-center align-items-center\"><a type=\"button\" class=\"btn btn-outline-primary transparency-button-" + (type == "link" ? "link\" target=\"_blank\" href=\"" + link + "\">Ir al enlace" : "document\" target=\"_blank\" href=\"" + link + "\">Descargar documento") + "</a></div>";
        stringToReturn = stringToReturn + "<div class=\"col-sm-8 d-flex align-items-center\">" + sections[sectionLvl1].Subsections[subsectionLvl2].elements[sectionLvl3].description + "</div>";
    } else {
        stringToReturn = stringToReturn + "<div class=\"col-sm-12\">" + (type == "title" ? "<h4>" : "<p>") + sections[sectionLvl1].Subsections[subsectionLvl2].elements[sectionLvl3].description + (type == "title" ? "</h4></div>" : "</p></div>");
    }
    return stringToReturn;
}
