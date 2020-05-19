using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class SyscscContext : DbContext
    {
        public SyscscContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Pasajero> Pasajeros { get; set; }
        public DbSet<Tiquete> Tiquetes { get; set; }
    }
}