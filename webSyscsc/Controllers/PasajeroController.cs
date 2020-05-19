using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using webSyscsc.Models;
using Entity;
using Logica;
using Datos;

namespace webSyscsc.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PasajeroController: ControllerBase
    {
        private readonly PasajeroService _pasajeroService;

        public PasajeroController(SyscscContext context)
        {
            _pasajeroService = new PasajeroService(context);
        }
        
        [HttpPost]
        public ActionResult<PasajeroViewModel> post(PasajeroInputModel pasajeroInput){
            Pasajero pasajero = Mapear(pasajeroInput);
            var response = _pasajeroService.Guardar(pasajero);
            if(response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.pasajero);
        }

        private Pasajero Mapear(PasajeroInputModel pasajeroInput){
            var pasajero = new Pasajero
            {
                Identificacion = pasajeroInput.Identificacion,
                Nombre = pasajeroInput.Nombre,
            };
            pasajero.Tiquetes.Add(pasajeroInput.Tiquete);
            return pasajero;
        }

        // GET: api/Pasajero/5
        [HttpGet("{id}")]
        public ActionResult<PasajeroViewModel> BuscarXIdentificacion(int id){
            var pasajero = _pasajeroService.BuscarXIdentificacion(id);
            if(pasajero == null){
                return null;
            }
            PasajeroViewModel c = new PasajeroViewModel(pasajero);
            return c;
        }

        [HttpGet]
        public IEnumerable<PasajeroViewModel> gets(){
            var pasajeros = _pasajeroService.ConsultarTodos().Select(p=> new PasajeroViewModel(p));
            return pasajeros;
        }
        
    }
}