<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Custom Config Package (simple config service)</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

```bash
npm install @syukurilexs/nestjs-config
```

## Usage

Import `ConfigModule`:

```typescript
@Module({
  imports: [ConfigModule],
  providers: [...],
})
export class AppModule {}
```

Inject `ConfigService`:

```typescript
@Injectable()
export class YourService {
  constructor(private readonly config: ConfigService) {}

  show() {
    return this.config.get('MYVAR');
  }
}
```

Declare env variable `NODE_ENV=development.env`

In order to use this package you need to create **config** folder on your root directory and then create your **.env** file
- development.env
- production.env

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Syukur Kassim (Syukurilexs on [Linkedin](https://www.linkedin.com/in/syukurilexs))**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
