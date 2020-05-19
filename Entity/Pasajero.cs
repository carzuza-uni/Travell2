using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Entity
{
    public class Pasajero
    {
        [Key]
        public int Identificacion { get; set; }
        public string Nombre { get; set; }

        public List<Tiquete> Tiquetes { get; } = new List<Tiquete>();
    }
}