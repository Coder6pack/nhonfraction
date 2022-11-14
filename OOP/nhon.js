// class Demo {
//   constructor(p = 1) {
//     this.p = p;
//     this.action = this.action.bind(this);
//   }

//   action() {
//     console.log("this is :", this);
//   }
// }

// function main() {
//   let x = new Demo();
//   let a = x.action;
// }

class Fraction {
  #tu = 0;
  #mau = 1;

  constructor(tu = 0, mau = 1) {
    this.#tu = tu;
    this.#mau = mau;
  }

  print() {
    console.log(this.#tu, `/`, this.#mau);
  }

  setMau(newMau) {
    if (this.#mau !== 0 && this.#mau === parseInt(this.#mau))
      this.#mau = newMau;
  }

  getMau() {
    return this.#mau;
  }

  scan() {
    let readline = require("readline-sync");

    this.#tu = +readline.question(`Nhap vao tu so:`);
    this.#mau = +readline.question(`Nhap vao mau so:`);
    this.check();
  }

  check() {
    if (
      this.#mau == 0 ||
      this.#tu != parseInt(this.#tu) ||
      this.#mau != parseInt(this.#mau)
    ) {
      this.#tu = 0;
      this.#mau = 1;
    }

    if (this.#tu < 0 && this.#mau < 0) {
      this.#tu = +this.#tu * -1;
      this.#mau = +this.#mau * -1;
    } else if (this.#mau < 0 && this.#tu > 0) {
      this.#tu = -this.#tu;
      this.#mau = this.#mau * -1;
    }
  }

  reduce() {
    let kq = new Fraction();
    kq.#tu = this.#tu;
    kq.#mau = this.#mau;

    while (kq.#tu !== kq.#mau) {
      if (kq.#tu > kq.#mau) {
        kq.#tu -= kq.#mau;
      }
      if (kq.#mau > kq.#tu) {
        kq.#mau -= kq.#tu;
      }
    }
    console.log(
      `Phan so khi rut gon la: ${this.#tu / kq.#tu} / ${this.#mau / kq.#tu}`
    );
    return kq.#tu;
  }

  printReduce() {
    let kq = 0;
    kq = this.printReduce();
    console.log(`Phan so khi rur gon la: ${this.#tu / kq} / ${this.#mau / kq}`);
  }

  fractionPlus(numplus) {
    let kq = new Fraction();
    kq.#tu = this.#tu * numplus.#mau + numplus.#tu * this.#mau;
    kq.#mau = this.#mau * numplus.#mau;
    return kq;
  }

  fractionmulty(num) {
    let kq = new Fraction();
    kq.#tu = this.#tu * num.#tu;
    kq.#mau = this.#mau * num.#mau;
    return kq;
  }

  fractionequal(num) {
    if (this.#tu / this.#mau == num.#tu / num.#mau) {
      return true;
    }
    return false;
  }

  fractionless(num) {
    if (this.#tu / this.#mau > num.#tu / num.#mau) {
      return true;
    }
    if (this.#tu / this.#mau < num.#tu / num.#mau) {
      return false;
    }
  }
}

function main() {
  console.log("===========MENU CHUONG TRINH");
  console.log("1. Nhap xuat phan so");
  console.log("2. Rut gon phan so");
  console.log("3. Cong phan so");
  console.log("4. Nhan phan so");
  console.log("5. So sanh bang hai phan so");
  console.log("6. So sanh hon hai phan so");
  let chose;
  let readline = require("readline-sync");
  chose = +readline.question("Hay chon chuong trinh:");
  switch (chose) {
    case 1: {
      let ps = new Fraction();
      ps.scan();
      ps.print();
      break;
    }
    case 2: {
      let ps = new Fraction();
      ps.scan();
      ps.reduce();
      break;
    }
    case 3: {
      let ps1 = new Fraction();
      let ps2 = new Fraction();
      let kq = new Fraction();
      console.log("Nhap vao phan so 1");
      ps1.scan();
      console.log("Nhap vao phan so 2");
      ps2.scan();
      kq = ps1.fractionPlus(ps2);
      console.log("Ket qua sau khi cong la: ");
      kq.print();
      break;
    }
    case 4: {
      let ps1 = new Fraction();
      let ps2 = new Fraction();
      let kq = new Fraction();
      console.log("Nhap vao phan so 1");
      ps1.scan();
      console.log("Nhap vao phan so 2");
      ps2.scan();
      kq = ps1.fractionmulty(ps2);
      console.log("Ket qua khi nhan hai phan so la");
      kq.print();
      break;
    }
    case 5: {
      let ps1 = new Fraction();
      let ps2 = new Fraction();
      console.log("Nhap vao phan so 1");
      ps1.scan();
      console.log("Nhap vao phan so 2");
      ps2.scan();

      if (ps1.fractionequal(ps2)) {
        console.log("Phan so 1 bang phan so 2");
      } else {
        console.log("Hai phan so khong bang nhau");
      }
      break;
    }
    case 6: {
      let ps1 = new Fraction();
      let ps2 = new Fraction();
      console.log("Nhap vao phan so 1");
      ps1.scan();
      console.log("Nhap vao phan so 2");
      ps2.scan();

      if (ps1.fractionless(ps2)) {
        console.log("Phan so 1 lon hon phan so 2");
      } else {
        console.log("Phan so 2 lon hon phan so 1");
      }
      break;
    }
  }
}

main();
