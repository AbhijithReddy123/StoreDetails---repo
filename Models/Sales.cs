using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class Sales
    {
        public int Id { get; set; }
        public int? Customerid { get; set; }
        public int? Productid { get; set; }
        public int? Storeid { get; set; }
        public DateTime? Datesold { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
        public virtual Store Store { get; set; }
    }
}
