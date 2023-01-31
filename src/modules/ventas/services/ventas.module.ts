import { Global, Module } from '@nestjs/common';
import { ventasProviders } from '../provaiders';
import { DatabaseModule } from '@database';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...ventasProviders],
  exports: [...ventasProviders],
})
export class VentasModule {}
