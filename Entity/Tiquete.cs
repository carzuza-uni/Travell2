using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Tiquete
    {
        [Key]
        public int TiqueteId { get; set; }
        public int Identificacion { get; set; }
        public string Ruta { get; set; }
        public int Valor { get; set; }
    }
}