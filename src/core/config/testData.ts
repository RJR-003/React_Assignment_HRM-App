import { dataBaseData } from "./type";

export const testData: dataBaseData = {
  department: ["development", "devOps", "cloudOps", "QA", "UserExperience"],

  employee: [
    {
      dateOfBirth: "2023-10-12",
      dateOfJoin: "2023-10-11",
      department: "QA",
      email: "geralt@gmail.com",
      fullName: "Geralt Rivia",
      id: 1009,
      imageSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgVFRYYGBgYGBgZEhgYGBEREhESGBgZGRgVGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhJSExNTQxMTE0NDQ0NDc2MTQxNDE0MTQ0NDQxNDQ0MTQ0NDQ0NDExNDE0NDE0MTE0NDE0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADoQAAIBAgUBBQYEBQMFAAAAAAECAAMRBBIhMUEFIlFhcYEGEzKRsfBCocHhUmJy0fEUIzMVJEOSsv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACQRAQEAAgICAQUBAQEAAAAAAAABAhEDIRIxBCJBUWFxgTIT/9oADAMBAAIRAxEAPwDFjWlZs4kMOzFtZphckR3SeWMVhNh0lsbQzCOq3lgJCWg00knJhlWVeo49KQu99dgBcm0JDoSZF3sdSB5kCc7ifaOoT2AqD/2b57CZNfEM5u5zHvOpjbcxd1TrgHcW8wQYVagJnnqMRtLVDG1ENwx9efAxtdO5ZTfSLJpMXp3Xx8NQWv8Ai3A85uLUVhcG4OxEJZoNUkMRSuJYS14zrMozsImVpolYCutiDLCuLSwoTJIAQrMIMODNBiIOul1hY1oWK1JdIoYU7GNAmyyKUxCWiQyAbRt4crIomsaZp6aw9wBc6Ab+EiBrMX2pr2pqoaxLXI17S2PPnxCTG2nxntGiGyDP43yr6aazm8fjWquXbTwF7D5yqTHAkesxkNHUSQSHSlz93hoJl0kqSX8/rJ1F/f8AvChLHxEASmaPS+o+7bK2qH5gd8ouLiDbYGEd9TCkBlNwRcHgiSRbmc77P9RshRjoD2T3A8fOdHhd5ZGNBYukzaCRXBtl3mk0GW0tGhk1qLW3k8FSsNZbenIlbC0ohcSDHWIrDIkCKpFCqsUAJWQIhpEiAwkkEYySjSBXx1fIjPpcDQd57pxePxz1WzOdthwBOi9pWGQLsd73t2drW5J/ScoBcyVqQl3hQn3xHC6eMNSBPEztqQ2XXu0/OEDC1/X7++Yv9O21v2jrhHHBk8o14ZfgF2+v5SbPqO7b5/5kfckm32IQYFydj/iLlITC0EPIg6Hz+/pDnAPv990C2Ha0TKFwyn2Rp1LXnXdBx+cWJ14HhOKYETW9nX/31uQB3nTeajGUd8ojZREqwipNMAOsrmXnWVnTWABhCoNJEiTWAyxSQEUCurSeWCYWjtUsLwJneEyyvRrBjLhEDnPauiTTRhsrWPqNPpOZRbTuOs0g2He/C39RrOIQSVrFbwmGzt4TYo4UDS0F0yn2Zq0knFy53b6HDxzUqNDBju2lxMD4ect4age6W0oGctztdMxkYv8A0lM1yPleWP8AShRYCbPuJFqJ7pLnlfZJjPTn6mFXuEzcRhgD4fek6PE0CDtM3E0pvHOmWMscr1LC21tKWCfLUQnhhf5zd6mvZM559Ded/FlvF87nw8b09VGwMkplbDVc9NGH4lU/MQ2onu5U2EC6wyteM20CoafMgZaRYN0gRURSVo8CnaQIGxhriRRQTAjSoAbQoJG8MABJMoIgU8cmek4HKH6TgaO9p6IKe84RsPauydzEekzk1h703el7TVw1PXWUMAgUCaVB8x0nzeTu3T63H1I2sJTE0EpiUsIp0O3zmgoM8ZGsqWUd0i6CEANoJkY8S1FLE05iYhdZt4ii/nMPHMUOv1jHG2teUkZHUKdwZy2ISxtOuqvmE5vqdO1Sw52ndw3XVcfyJvuO36In+xTH8omoRM7oVcPTAtlKWUj03mk865dzpwZSy6oViDKWIz5tNpeqHSRQX3gDR7Cxkr3hDTBlZwVMAjCKQLx4FJlkKZynWTz6QHvCeIaXmkgdIPN2REagtDIjjsnyM400ctdD/FcHzE7NXuJzeOo2qK3c5A9QZ5cnWnvwzcv+Di6ja+tgBuTJ0TiEOfI3iLEj0tNHDYcBQx41GhNj6Qi9ePvFpoAWY2JY5ETxY2M5Jlu6k267P3osN7UMlg9J7cm2o/KdNgOrU6oBGl+DoZydb2jqZ2Q0UbI+Q2dgxOZVuBlI1zC3eA3dNpaZTMxTKyHtrocvjp878xnNT1pMLv77dEGEq47GZFJUXP6R8E4dL3mdja1y1vhUEsdgANyZ5SvWxgYrqOMqNlVNDoABc+uukC/QMQwzO6i/GpIMnj8diQw92cqlAwZEFU63sG3CmwGm+sFUxeJVEcl3JW9QMoXI3cOGHhx3z3u5OtR46ly1dqLYZ0YqdRwZnYmj/wBwnr+U6nDf7iFiLfWYroDiVubAZtfSTDLdv8ayx9f1s9GFkPif0mixlbAoAlhtc2+cszt45rGOHlu86DUfiHXaCqII+GbiaeYiGMw1iG8QOsATLFJMYoFFlFrRJT1AkCTeFoN2oBqlPSAFK4lthpIKLQGRbC0wurOfeBeA4PzE6CYnVkXMzW7QKW8r7zy5fU/r24d+V1+GtgRdLSzh+nZWLABg24I/WUuk1LAXnUYRtNJ869WvoTuRTXCJxRF/ISWKpBKbEIFZ1ytYWuBtfy1msvfMbreI1C8fWLbrTWM7S6L/AMZ1gMNrUZG2Y211B1BsR6Q/Rl7B0lGvUK1CTob6d0y3pqNRqKfhBHgbA+kDiaDuNRYc6/tNTDYjMg8pJ10mt7ebm3wmS9pymKpFqwyi57R+QnX9WqZb66TnMJrX0FzlNvmJvj33YxnrrfS/gMwpr6387y5TRosLSyrY7kknzMMWAn0sN+M2+bnZ5XX5VXpEneFw1Ii8fNpLVMWErKkwIaRpob6y0y6yRSAJkihLRQKVRRKmHbt6yyW0lDEvl1hY0y8ip1mbRxRIlpHIg0ssZR6oAaTG2oH5XhmrwVZgykX3BElksJbLuA4CroJ1nTsQLTj+iC5CnjQ+k2MA5BcX+Em3lv8ArPm8k1lX1MLvGOgxGNA0G/3vMCpTL1MzG5zfISjiesGnpuTqSd9dpSr4m5vfuPNwT9IxwyXzxj0jp1FQg213mP1rDpm3G8welddqrdG1spKsb6gamU8RinqnM2x2B1G/dLcb6JlN7dH06rkuFN1B7MvtjBacY/UWRbC+p0ttfwh+n9UZ6gUra+++231mbhdbPPG3S11bEZjYeMzui398x/kt+f7QuLaztfhTI+zovnfgmw9P8z3+Pj28Pk36W8q3jPh7iEpwgM7Xz2dWXKLS9QHZEFi6VxGp4gAAEwoziKR94DtJ3EIC28Ud2EUKywZWxiXENeMx0gZ9JSGtL5OWVam94cNmWGhhYiDemI1JuJNjDLNwz+6r24bUHx5E3MIM1R1J0cbjSxtac51CqHIVd11v3HulnDY1rX2YCx8LTj5sN5bju4crMdUbqfTMpupBykZu6+xuZZ6SoqEoVRCLWz/jJIFgbbx8LiA5Nxe4FwQDpzGwws+ViLqbC+gdeCDsTMS/avbGT+bdQvRKltaVJ7eNiedNBJ4npNREZn90iqpYkAsAB6Djx4gqGJdVslV1B1NyG/8AoG20r9Qrlxd3ZyNrkBRtuBYcCNY/hrxz/Mc7jkZ6hRXDIp1cKEz+K6nyljp+HSmxYm2hIGttORfeCWtckg6a6/xeAnP4/GkOQCeQdwI1c/pnTGeWON37WOpY0sWt+I2Hf97zoej4X3dJVO51b+oznuhYTO+dvhU9m/4m/adarTr48PGOHmz8qsIYRBKyPLKNPR4pVEuJhVqZFQnidDKmJoAwQDCnwlgIDB4I2uJJgVbwgRbDeMUsmKDbmErAwmaUygvHCEmw18obEqIbyxhqRJyqCSeBrNLp/s7UezOci797H04nU4LBIi5UW3jux8SY0za5rCdGa/b0/lG/rNit0NRRfKO0Ua3naa1LDDNeaJp6RpNvEMNSs3pLj0OQNbWPFxL3VcAaWKdOM11/pbUffhCpSuJwZ5XGvp4YzKbZGAxGVyNddrW+U2qtBHUFtLnwt4EzJx/T2BDJxqQNCfI8RsB1A7G4IPwkm4HgD6xZMu4zLcbrJqJ0dSfiItoQGYd/56Rx0kAAMSfNib93rEmMVv76aHuEHiOoALuNjzvyB4Sby9N/T7P1PIlMhd+f0Gm37TilUvUC33Op7hzNXqGNLkImp2J4t490GmFCL3k7me3HPGd+68M/qvXqNunVCKFAsANPKX6VcESr7OUxWRkbdNVPNoXFYNkaxnTjdxyZTV0sYd9d5fR5k0KduYcAjYyo2EeNWXSZ1PEsNxLVLF30IhNIIlzcSy63EZHWTuCIDARSGeKBzmA6VUqt2RYd50HznW4Dp6UrBQGf8THWx7hDYYFh3DgDQASxh6faPnLIWriJ2dfWWlUASNNdJKodLSoagOZoUxfSVEWwh0a0lWOX9tul5lWuo1Ts1P6DsfQ/Wc1QGk9VemrqQQCGFiDsQdxPPur9JbD1Mp+Bv+Nu8fwnxE4PlYX/AKjv+LyTXjf8Z7peUMZ01X3Go2I0Yes0yCIxF5yY53H067jL7cy/TXT4XI8wCYFunsfie/kALzpmECyDe09ZzVj/AMsWPQwQQaC36wNfWaWLJtYSi9PSbxz33WMsdTUX/ZFsuJt/EpHynXdUwwNj85xns8+XGU/FiPmDPQ8Wl09Z28V3i4eaayco9C20HntNmtQlSpgwZ6PHahSxHEtUWld8EyG8kr23hV7MJJKijS8pJUuZVqXNTfSDTXBvFKFIMp0MUDrKNO2kPh01PnC001kqC/qZpkUCORrGtJINYBbSQiAiAkUeg8WPwSVqZRxcHY8qeGB4IkFEso0zZK1Lp511DBPh6mRxcf8Aje2jr/fvECLHiejY/BJWplHFxwfxKeGB4M4LqmCehUyP5o3Dr3+fhPm8/D43c9Po8PN5TV9qbpKzCW0eCqLczndCqaNzK2IoW4mso0gqiXE1jklij7P4Mti6fgxY+QBnoeJpdgzG9kMB2nq20HZXz3b9J0+KTsec+p8ffju/d8z5Nly1Ps59qfEAadprPRlWrTns51NqQIlDE4Oaki4kHOlMplbFfEDNnF0bzIqOACDxDUW6J0vFKKY5AN40D0oCwJ8JKmv5ACOw0A7z+Qk0HZ85pkwWTRdYlEIokUgJMLEokgIUgJJYwjyA6vKfV+npXplG33RuUbgiGBk6bSZYyzVWZWXceZ4rDPTbI6lW8dm8VPIg1M9K6hgErpkdbjg7Mp7weJw3VeiPh2uLuh2YDtL/AFAfWfO5fj3HvHuPo8XyMcusuqpE6SFKg7uEQXZjp/c+EJh6TO2VBmY7AceJ7hOs6L0c0Lu5BdtNNkX+EHnzmeHhud/TXNzTCftd6fgxSpqg4Gp/iY7n5wmI1Nu6GLWF+ZXM+pJqaj5dtt3QXWVqqS6RAusrLMqpKzTTqJKNZIFDEbjzmH1nC6kd40m5iZX6jTzUw/I38pFjzksysVbiKafXcJY5hzvFI29nf6D8zCAaSCi5v43+WgkxNsEghBICTEgmDJSAkrwp4iY14ryB4rxrxrwCLUjqvPP6QJMQeNAopKNgB32AEi0Y1dINmjRai5vIGSJkDKhjBtJmQaVFdxKlZZcqSrUEgy8Sm8FRNwUPOnrLdcTNqPla8isTqFC4yng29QYpo9VSzFhs1jGg29BUWEnIXjgyiQklkYrwJgx5EGPeFSvFeRj3gPeMY14rwFaNHJkSYQoxivImArxiYmkSYDEwbSZMGxlQNpVqSw0ruZBSrTKx01qxmP1DYyVQaz5qQ8LD84pXwguhH3e8aFeiK8IGlOm8MryosAxAwYMleAQRXkA0fNAmDHvBgx7wJXiJkC8jeBMtGvIxxAnIkxEyJMBEyBMRMgTKExkGMctBs0Ig5ldzDOYBzIKtYzE6i2hmxWMwuqP2TJVjPwFQ62+9YpHAmwJ4iht6DTaWEaZ9N5ZR5WFtWkw0rI0IGgGBj3gg0cNKC3ivB5oxaQTzRwbwYkgYBBGJkC8gXlQQtIloM1JHNAIWkC8GXkC0gKWkCY15FmgM8ruYYytVMCniWnPdWqaGbmKbScx1Z+JmtRCmeyq+FzFB0iYoad2ssIYopWVhOIVYopUTElFFCFFFFKHWOYooEWgniigRkWjxSCBjCKKA7RoooDGVHiigZuK5nK9S+IecUUzWsSoRRRQ0/9k= ",
      role: "Lead Engineer",
      skills: ["React", "Angular", "Node"],
      location: "Trivandrum",
    },
    {
      dateOfBirth: "2023-05-16",
      dateOfJoin: "2023-10-12",
      department: "development",
      email: "wiky@gmail.com",
      fullName: "Wiky",
      id: 1010,
      imageSrc:
        "data:image/jpeg;base64,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 ",
      role: "Architect",
      skills: ["React"],
      location: "Hyderabad",
    },

    {
      dateOfBirth: "2023-05-26",
      dateOfJoin: "2023-10-21",
      department: "development",
      email: "billy.johns@gmail.com",
      fullName: "Billy Johns",
      id: 1003,
      imageSrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAM1BMVEX////CwsK/v7/c3Nz8/PzFxcXIyMjo6OjV1dW8vLz19fXj4+P4+PjNzc3Y2NjS0tLv7+85X/oaAAADhklEQVR4nO2b2XKrMAyGY2GbxYD9/k9boJCUhEUSEuGc4b9qJ9PpN7Ika3Eej1u3bt26dbZsXVVVbb8IkLLovXPGOe9jlr6BkkcDYF6C0sT8XAQbOoK/DL8gAOFEgwT3QTCBuHASQ92sMQwcTX0GRL7FMHCc4B7ZHkSHkWlDtPsQHUarCxExEB1G1IRAWULbGgEL0WGoRWxCM/SqdCDsaq5alNNJo4gYnZ2JSrzWJQnCmFLDGAXNFJ0xCnmIisjQS95BiV4xGEPeMzzDFl4agpYrJiVhCsaBKBxJwzEFNMIUHFN0KUMWwlJT1kghm7gqJoVsxsiZFLIl6G7JuyzhQphLIVvrXMQW1/ALJoVsCieXOCOFcLfIpJCFeLAgjBGmQPdDM0nXfKxQFe/eOWWnceKFJ6fAkC4vWBlDOGf1svTy1yu0RYHcm6m07Y5qCg0IarBqDdlInapGlzqI5KA659GLkrqURjm9Enq6Jt0bzoTzUNAe/2K6ZhDvkj9U7acN+UvsUzZuJ9Eyau1IbAqFd5Oh842RI7jRJZJzvgiCa6yq9b/bqcnp6vZzUTR6RDvWu2n83bcyx1MXr/3Y84KyGZTvIFCabKq5X7NqgEKgEA+z//ZnE5TaxpQwqTRN+4yMt23S4T7Rvt8dz3PvP6xTyIrYxCIL6c9ONX8/LygOuYddWJFBs33SVfMZQ9AcwfCLTljG9ayUluMYDlxua1d55/phySBV8CvBc+CiD7CeJ8E08522TVmzhjD8AdNF9+5xKMvSx6LN2iL67ue9i46XOHAdCJiFXfeiWN1J4rXp62INM1jT3k0xjMGccG6JMf0kr4b2RY/WmtoDYeSo9xphgYsXOWdwVkP7FET/ZO4A9kTcETBnvXsidggKETJQkKLEakRIL9LyvdYxRWcMSqwquQVx1MWbsSJEeqMif5NNImQMxjwPK493DNagFydCJ40eltBFGK+ohQgpe6pcqCMF/lplPTBAUuCfIUQ1CGPwb+uWG0MREUoMvXRBmcZq3ai93D9GoQiBp7CaFOgVqy4Fttq6KU6iwNe/14hUzdyJp0C++uaI0Bddo764RsWnWYMTWsRrdEWVGgVpwHaJyYGWMUgt+0OpDKe/A978ChMTgj78lR/nAOeFTE37osa+yDNXBQwgzAzmypCbDwTDkQfqVetBQkc3zDbl2VHlX/nS6K1bt2797/oBmNcr+ovodh0AAAAASUVORK5CYII=",
      role: "Associate Director",
      skills: ["React", "Angular"],
      location: "Bangalore",
    },

    {
      dateOfBirth: "2023-05-26",
      dateOfJoin: "2023-10-21",
      department: "development",
      email: "zacky.wild@gmail.com",
      fullName: "Zack Wilde",
      id: 1005,
      imageSrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAM1BMVEX////CwsK/v7/c3Nz8/PzFxcXIyMjo6OjV1dW8vLz19fXj4+P4+PjNzc3Y2NjS0tLv7+85X/oaAAADhklEQVR4nO2b2XKrMAyGY2GbxYD9/k9boJCUhEUSEuGc4b9qJ9PpN7Ika3Eej1u3bt26dbZsXVVVbb8IkLLovXPGOe9jlr6BkkcDYF6C0sT8XAQbOoK/DL8gAOFEgwT3QTCBuHASQ92sMQwcTX0GRL7FMHCc4B7ZHkSHkWlDtPsQHUarCxExEB1G1IRAWULbGgEL0WGoRWxCM/SqdCDsaq5alNNJo4gYnZ2JSrzWJQnCmFLDGAXNFJ0xCnmIisjQS95BiV4xGEPeMzzDFl4agpYrJiVhCsaBKBxJwzEFNMIUHFN0KUMWwlJT1kghm7gqJoVsxsiZFLIl6G7JuyzhQphLIVvrXMQW1/ALJoVsCieXOCOFcLfIpJCFeLAgjBGmQPdDM0nXfKxQFe/eOWWnceKFJ6fAkC4vWBlDOGf1svTy1yu0RYHcm6m07Y5qCg0IarBqDdlInapGlzqI5KA659GLkrqURjm9Enq6Jt0bzoTzUNAe/2K6ZhDvkj9U7acN+UvsUzZuJ9Eyau1IbAqFd5Oh842RI7jRJZJzvgiCa6yq9b/bqcnp6vZzUTR6RDvWu2n83bcyx1MXr/3Y84KyGZTvIFCabKq5X7NqgEKgEA+z//ZnE5TaxpQwqTRN+4yMt23S4T7Rvt8dz3PvP6xTyIrYxCIL6c9ONX8/LygOuYddWJFBs33SVfMZQ9AcwfCLTljG9ayUluMYDlxua1d55/phySBV8CvBc+CiD7CeJ8E08522TVmzhjD8AdNF9+5xKMvSx6LN2iL67ue9i46XOHAdCJiFXfeiWN1J4rXp62INM1jT3k0xjMGccG6JMf0kr4b2RY/WmtoDYeSo9xphgYsXOWdwVkP7FET/ZO4A9kTcETBnvXsidggKETJQkKLEakRIL9LyvdYxRWcMSqwquQVx1MWbsSJEeqMif5NNImQMxjwPK493DNagFydCJ40eltBFGK+ohQgpe6pcqCMF/lplPTBAUuCfIUQ1CGPwb+uWG0MREUoMvXRBmcZq3ai93D9GoQiBp7CaFOgVqy4Fttq6KU6iwNe/14hUzdyJp0C++uaI0Bddo764RsWnWYMTWsRrdEWVGgVpwHaJyYGWMUgt+0OpDKe/A978ChMTgj78lR/nAOeFTE37osa+yDNXBQwgzAzmypCbDwTDkQfqVetBQkc3zDbl2VHlX/nS6K1bt2797/oBmNcr+ovodh0AAAAASUVORK5CYII=",
      role: "Senior Engineer",
      skills: ["React", "Angular"],
      location: "Bangalore",
    },
    {
      dateOfBirth: "2023-09-24",
      dateOfJoin: "2023-09-25",
      department: "development",
      email: "james.wild@gmail.com",
      fullName: "James Hetfield",
      id: 1007,
      imageSrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAM1BMVEX////CwsK/v7/c3Nz8/PzFxcXIyMjo6OjV1dW8vLz19fXj4+P4+PjNzc3Y2NjS0tLv7+85X/oaAAADhklEQVR4nO2b2XKrMAyGY2GbxYD9/k9boJCUhEUSEuGc4b9qJ9PpN7Ika3Eej1u3bt26dbZsXVVVbb8IkLLovXPGOe9jlr6BkkcDYF6C0sT8XAQbOoK/DL8gAOFEgwT3QTCBuHASQ92sMQwcTX0GRL7FMHCc4B7ZHkSHkWlDtPsQHUarCxExEB1G1IRAWULbGgEL0WGoRWxCM/SqdCDsaq5alNNJo4gYnZ2JSrzWJQnCmFLDGAXNFJ0xCnmIisjQS95BiV4xGEPeMzzDFl4agpYrJiVhCsaBKBxJwzEFNMIUHFN0KUMWwlJT1kghm7gqJoVsxsiZFLIl6G7JuyzhQphLIVvrXMQW1/ALJoVsCieXOCOFcLfIpJCFeLAgjBGmQPdDM0nXfKxQFe/eOWWnceKFJ6fAkC4vWBlDOGf1svTy1yu0RYHcm6m07Y5qCg0IarBqDdlInapGlzqI5KA659GLkrqURjm9Enq6Jt0bzoTzUNAe/2K6ZhDvkj9U7acN+UvsUzZuJ9Eyau1IbAqFd5Oh842RI7jRJZJzvgiCa6yq9b/bqcnp6vZzUTR6RDvWu2n83bcyx1MXr/3Y84KyGZTvIFCabKq5X7NqgEKgEA+z//ZnE5TaxpQwqTRN+4yMt23S4T7Rvt8dz3PvP6xTyIrYxCIL6c9ONX8/LygOuYddWJFBs33SVfMZQ9AcwfCLTljG9ayUluMYDlxua1d55/phySBV8CvBc+CiD7CeJ8E08522TVmzhjD8AdNF9+5xKMvSx6LN2iL67ue9i46XOHAdCJiFXfeiWN1J4rXp62INM1jT3k0xjMGccG6JMf0kr4b2RY/WmtoDYeSo9xphgYsXOWdwVkP7FET/ZO4A9kTcETBnvXsidggKETJQkKLEakRIL9LyvdYxRWcMSqwquQVx1MWbsSJEeqMif5NNImQMxjwPK493DNagFydCJ40eltBFGK+ohQgpe6pcqCMF/lplPTBAUuCfIUQ1CGPwb+uWG0MREUoMvXRBmcZq3ai93D9GoQiBp7CaFOgVqy4Fttq6KU6iwNe/14hUzdyJp0C++uaI0Bddo764RsWnWYMTWsRrdEWVGgVpwHaJyYGWMUgt+0OpDKe/A978ChMTgj78lR/nAOeFTE37osa+yDNXBQwgzAzmypCbDwTDkQfqVetBQkc3zDbl2VHlX/nS6K1bt2797/oBmNcr+ovodh0AAAAASUVORK5CYII=",
      role: "Architect",
      skills: ["React", "Angular"],
      location: "Bangalore",
    },
  ],
  role: [
    "Engineer",
    "Senior Engineer",
    "Lead Engineer",
    "Associate Architect",
    "Architect",
    "Senior Architect",
  ],

  skill: [
    { id: 1, skill: "React" },
    { id: 2, skill: "React Native" },
    { id: 3, skill: "Angular" },
    { id: 4, skill: "Node" },
    { id: 5, skill: "HTML/CSS" },
  ],
};
