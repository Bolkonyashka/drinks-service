export class VendingTip{
    status: boolean = false;
    text: string = ''; // Tip info

    resetStatus() {
        this.status = false;
        this.text = '';
    }

    prepareTip(pText: string) {
        this.status = true;
        this.text = pText;
    }
  }