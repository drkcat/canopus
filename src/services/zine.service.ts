import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ZineService {
  @Inject('ZINE_SERVICE') private client: ClientProxy;

  public getCinemas(res: Response): Promise<string> {
    return lastValueFrom(this.client.send<any, any>('cinemas', {})).then(
      (response) => {
        if (response.statusCode) res.statusCode = response.statusCode;
        return response;
      },
    );
  }

  public getCinema(res: Response, id: string): Promise<string> {
    return lastValueFrom(this.client.send<any, any>('cinema', { id })).then(
      (response) => {
        if (response.statusCode) res.statusCode = response.statusCode;
        return response;
      },
    );
  }

  public getCinemaPro(res: Response, id: string): Promise<string> {
    return lastValueFrom(this.client.send<any, any>('cinema/pro', { id })).then(
      (response) => {
        if (response.statusCode) res.statusCode = response.statusCode;
        return response;
      },
    );
  }
}
