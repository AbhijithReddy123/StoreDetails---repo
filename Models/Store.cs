﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }
        public string StoreName { get; set; }
        public string StoreAddress { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
