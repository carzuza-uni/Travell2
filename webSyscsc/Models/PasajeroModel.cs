using Entity;
using System.Collections.Generic;

namespace webSyscsc.Models
{
    public class PasajeroInputModel
    {
        public int Identificacion { get; set; }
        public string Nombre { get; set; }
        public Tiquete Tiquete { get; set; }
        public List<Tiquete> Tiquetes { get; } = new List<Tiquete>();
    }

    public class PasajeroViewModel : PasajeroInputModel
    {
        public PasajeroViewModel()
        {

        }
        public PasajeroViewModel(Pasajero pasajero)
        {
            Identificacion = pasajero.Identificacion;
            Nombre = pasajero.Nombre;
            foreach (Tiquete item in pasajero.Tiquetes)
            {
                Tiquetes.Add(item);
            }
        }
    }
}