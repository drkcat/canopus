import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Line, Station } from '../models/zaragoza.interface';
import { ZaragozaService } from '../services/zaragoza.service';

@Controller('zgz')
@ApiTags('zaragoza')
export class ZaragozaController {
  constructor(private readonly zaragozaService: ZaragozaService) {}

  @Get('bus/stations')
  @ApiOperation({ summary: 'Get bus stations' })
  @ApiResponse({
    status: 200,
    description: 'Return bus stations',
    type: [Station],
  })
  async zaragozaBusStations() {
    return this.zaragozaService.getBusStations();
  }

  @Get('bus/stations/:id')
  @ApiOperation({ summary: 'Get bus station by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiParam({ name: 'source', enum: ['api', 'web', 'backup'], required: false })
  @ApiResponse({
    status: 200,
    description: 'Return bus station',
    type: Station,
  })
  async zaragozaBusStation(
    @Param('id') id: string,
    @Query('source') source: 'api' | 'web' | 'backup',
  ) {
    return this.zaragozaService.getBusStation(id, source);
  }

  @Get('bus/lines')
  @ApiOperation({ summary: 'Get bus lines' })
  @ApiResponse({
    status: 200,
    description: 'Return bus lines',
    type: [Line],
  })
  async zaragozaBusLines() {
    return this.zaragozaService.getBusLines();
  }

  @Get('bus/lines/:id')
  @ApiOperation({ summary: 'Get bus line by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Return bus line',
    type: Line,
  })
  async zaragozaBusLine(@Param('id') id: string) {
    return this.zaragozaService.getBusLine(id);
  }

  @Get('tram/stations')
  @ApiOperation({ summary: 'Get tram stations' })
  @ApiResponse({
    status: 200,
    description: 'Return tram stations',
    type: [Station],
  })
  async zaragozaTramStations() {
    return this.zaragozaService.getTramStations();
  }

  @Get('tram/stations/:id')
  @ApiOperation({ summary: 'Get tram station by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({
    status: 200,
    description: 'Return tram station',
    type: Station,
  })
  async zaragozaTramStation(@Param('id') id: string) {
    return this.zaragozaService.getTramStation(id);
  }
}
