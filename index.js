import Population from "./models/population.js";
import PopulationService from "./services/population.service.js";

const main = async () => {
  const populationService = new PopulationService();
  const pop01 = new Population('0001', 'Jution Candra Kirana', 'Laki-laki', null, '1999-12-22', 'Natar', '18', '09', '05');
  const pop02 = new Population('0002', 'Destry Faradila', 'Perempuan', null, '1999-12-22', 'Natar', '18', '09', '05');

  await populationService.register(pop01).catch(err => err);
  console.log('------------------------------------------');
  console.log(pop01.toString());

  console.log('------------------------------------------');
  const list = await populationService.getAll().catch(err => err);
  console.log(list);

  console.log('------------------------------------------');
  const findNik01 = await populationService.getByNIK('1809052212990001').catch(err => err);
  console.log(findNik01);

  console.log('------------------------------------------');
  const add02 = await populationService.register(pop02).catch(err => err);
  console.log(add02);

  console.log('------------------------------------------');
  const list02 = await populationService.getAll().catch(err => err);
  console.log(list02);
}

main();