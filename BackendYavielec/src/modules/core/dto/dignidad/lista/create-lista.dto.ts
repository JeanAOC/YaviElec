import { ListaDto } from '@core/dto';
import { TipoListaEntity } from '@core/entities';
import { isNotEmptyValidationOptions, isStringValidationOptions } from '@shared/validation';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateListaDto extends ListaDto {
    @IsString(isStringValidationOptions())
  @IsNotEmpty()
  slogan: string;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  propuesta: string;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  periodo_lectivo: string;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  nro_lista: number;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  color: string;

  @IsString(isStringValidationOptions())
  @IsNotEmpty()
  logo: string;

  @IsNotEmpty()
  estado: boolean;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly tipoLista: TipoListaEntity;
}