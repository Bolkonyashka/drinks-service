using Microsoft.EntityFrameworkCore;

namespace DrinksServiceApi.Models
{
    public class VendingContext : DbContext
{
    public DbSet<VendingModel> VendingModels { get; set; }
    public DbSet<DrinkModel> DrinksList { get; set; }
    public VendingContext(DbContextOptions<VendingContext> options)
        : base(options)
    { }
}
}
