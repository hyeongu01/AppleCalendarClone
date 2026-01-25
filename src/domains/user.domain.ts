import { CreateUserDTO } from "../dtos/user.dto";

export class User {
  readonly id?: number;
  readonly email?: string;
  readonly phone?: string;
  readonly name: string;
  readonly createdAt?: Date;

  private constructor(props: {
    id?: number;
    email?: string;
    phone?: string;
    name: string;
    createdAt?: Date;
  }) {
    this.id = props.id;
    this.email = props.email;
    this.phone = props.phone;
    this.name = props.name;
    this.createdAt = props.createdAt;
  }

  static create(props: CreateUserDTO): User {
    // 형식 체크 (phone, email)

    
    return new User({
      email: props.email,
      phone: props.phone,
      name: props.name
    })
  }
}