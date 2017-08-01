export class MySnackBar {
  constructor(
    public opened: boolean = false,
    public message: string = null,
    public action: MySnackBarAction,
    public duration: number = 4000
  ) { }
}

export class MySnackBarAction {
  constructor(
    public text: string,
    public action: any
  ) { }
}
